// Uso de map 
let numeros = [1,2,3,4,5];
// Modificar el arreglo con map
let modificador = numeros.map (element=>{
    return element*3;
});
console.log(modificador);

// ----- ForEach
let colors = ['red','blue','purple',];
let iterador = colors.forEach(color => console.log(color));
console.log(colors);
console.log(iterador);

// filtrar datos
let numeros2 = [1,2,3,4,5,6,7,8,9,10];
let filtrar = numeros2.filter(numero => numero % 2 === 0);
console.log(numeros2);
console.log(filtrar);

// Encontrar con find
console.log("--- Encontrar con find ---");
let multiplo5 = [5,10,15,20];
// Busca al 1er numero mayor de 10 
let encuentra = multiplo5.find(numero => numero >10 );

console.log(encuentra);

// Encontrar y recorrer con slice
console.log("--- Uso de slice ---");
let animales = ['leon','lagartija','mono','sapo','elefante'];

console.log(animales.slice(2));
console.log(animales.slice(2,4));
console.log(animales.slice(-2));
console.log(animales.slice(2,-1));

console.log("--- Copia de arreglos ---");

let arregloOriginal = [1,2,3,4,5];
let arregloCopia = [...arregloOriginal];
console.log(arregloCopia);
let arregloOriginal2 = [6,7,8,9,10];
let combinarArreglo = [...arregloOriginal,...arregloOriginal2];
console.log(combinarArreglo);

