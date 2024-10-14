// contiene propiedades y metodos
let persona = {
    nombre: 'Juanito',
    apellido: 'Lopez',
    edad: 23,
    email: 'juanito123@gmail.com',

    // crearion de mi metodo
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona.nombreCompleto); // Juanito Lopez

// Forma 2 
function Persona (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.completo = function(){
        return (`Mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad}`);
    }   
} 
let Persona1 = new Persona("Luis","Perez", 15);
console.log(Persona1.completo());