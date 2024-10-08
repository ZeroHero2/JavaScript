// contiene propiedades y metodos
let persona = {
    nombre: 'Juanito',
    apellido: 'Lopez',
    edad: 23,
    email: 'juanito123@gmail.com',

    // crearion de mi metodo
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nombreCompleto());
// --------- Creacion de objetos -----------
let persona2 = new Object();

persona2.nombre = "Mario";
persona2.direccion = "Saturno 15";
persona2.tel = 55178213;

console.log(persona2.nombre);