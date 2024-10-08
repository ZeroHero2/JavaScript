// 
var myCar = {
    marca: "Ford",
    model: "Mustang",
    year: 1969,
}

myCar.color;

// Ejemplo de objeto estudiante
let estudiante = {

    nombre: 'Marco',
    edad:17,
    // objeto calificaciones de mi estudiante
    calificaciones:{
        matematicas:8,
        ingles:9,
        historia:7,
    },
    // Imprimir saludo con nombre y edad
    saludar: function(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}
// Acceder a las propiedades del objeto
console.log(estudiante.nombre); // "Marco"
console.log(estudiante.calificaciones.ingles); // 9

// Usar un método del objeto
estudiante.saludar(); // "Hola, soy Marco y tengo 17 años."


// ------ Funcion constructora ------
function Estudiante(nombre,edad,grado){
    this.nombre = nombre;
    this.edad = edad;
    this.grado = grado;
    this.saludar = function(){
        console.log (`Hola, soy ${this.nombre}, tengo ${this.edad} y estoy en ${this.grado}`);
    };
}
const estudiante1 = new Estudiante ("Luis", 24, "11°");
const estudiante2 = new Estudiante ("Maria", 22, "7°");
estudiante1.saludar();
estudiante2.saludar();
