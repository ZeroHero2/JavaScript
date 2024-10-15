// contiene propiedades y metodos
let persona = {
    nombre: 'Juanito',
    apellido: 'Lopez',
    edad: 23,
    email: 'juanito123@gmail.com',
    idioma:'mx',

    get lengua(){
    return this.idioma.toUpperCase();

    },
    // get nos sirve para obtener
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }

}

console.log (persona.nombreCompleto);
console.log (persona.lengua);