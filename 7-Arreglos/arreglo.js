let numerosArreglo = [15,12,82,24,31];


console.log(`El valor 0 del arreglo es ${numerosArreglo[0]} `);

//Leer valores ordenados
console.log("Leer valores del arreglo");
for(let i=0; i<numerosArreglo.length; i++){
    numerosArreglo.sort();
    console.log("El valor de tu arreglo es: " + numerosArreglo[i]);
}