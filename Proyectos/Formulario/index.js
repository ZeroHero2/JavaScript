// 1. El usuario debe poder ingresar con usuario y contraseña
// 2. Validar si el usuario y contraseña ingresados existen
// 3. Si el  usuario y contraseña son corretos se da un mensaje de bienvenida
// 4. Si el usuario y contraseña son incorrectos debe de mostrar un mensaje de error
// ----------------- Librerias a utilizar -------------- 
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt'); // Encripta contraseñas

const app = express();
app.use(bodyParser.json());

// --------------- Conexion a base de datos --------------
// Parametros de mi base de datos
const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"usuarios"
});

// Evalua la conexion con los datos 
connection.connect(error => {
  try {
      if (error) throw error;{
          console.log("Error en la conexion: " + error );
        }
  }
  catch(x){
      console.log("Contacto error --Error-- " + x);
  }
});

// ----------------- Logica del back ----------------- 
// Ruta para manejar el login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Consulta en la base de datos para encontrar el usuario
  const query = 'SELECT * FROM acceso WHERE username = ?';
  connection.query(query, [username], async (err, results) => {
      if (err) {
          return res.status(500).json({ success: false, message: 'Error en el servidor' });
      }

      if (results.length === 0) {
          return res.status(401).json({ success: false, message: 'Usuario no encontrado' });
      }

      const user = results[0];

      // Compara la contraseña ingresada con la almacenada
      const match = await bcrypt.compare(password, user.password);

      if (match) {
          res.json({ success: true });
      } else {
          res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
      }
  });
});

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});