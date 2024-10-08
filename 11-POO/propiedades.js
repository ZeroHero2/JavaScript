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
// Acceder a las propiedades de un objeto 
console.log ("------ Acceso a las propiedades -----")
console.log(persona.nombre);
console.log(persona['nombre']);

// Recorrer cada uno de los elementos con un for 
console.log ("------ Recorrer las propiedades -----")
for (nombrePropiedad in persona){
    console.log(nombrePropiedad); // se accede a todos los nombres de las propiedades
    console.log(persona[nombrePropiedad]); // se accede a los atributos de las propiedades
}

// Agregar propiedades a mi objeto
console.log ("------ Agregar propiedades -----")
persona.tel = 21354141; // Se accede al objeto y se agrega propiedad con un .
console.log(persona);
delete persona.tel; // se usa delete para borrar la propiedad
console.log(persona);

// Agregar propiedades a mi objeto
console.log ("------ Mandar a llamar objetos para navegador -----")
// por concatenacion
console.log(persona.nombre + " " + persona.apellido);
// por for in
for (Atributo in persona){
    console.log(persona[Atributo]);
}

// metodo JSON para convertir un objeto en una cadena 
let personaString = JSON.stringify(persona);
console.log(personaString);