//largo de una cadena 

let cadena1 = 'cadena';
console.log (cadena1.length);

// Las cadenas son inmutables, no se pueden modificar
cadena1[0] = 'x';
console.log(cadena1);

for (let i=0; i< cadena1.length; i++){
    console.log(cadena1[i]); // imprime la cadena letra por letra
}
// subcadena 
// extraer pedazos de una cadena 
let cadena3 = 'Hola mundo'
// No se incluye el caracter indice_fin
let cadena2 = cadena3.substring(0,4);
console.log(cadena2)
let cadena4 = cadena3.substring(5,10);
console.log(cadena4);