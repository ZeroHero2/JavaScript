// Sintaxis 
let matriz = [[120,140,180],[300,320,370,390,420]];
 
//No. renglones
console.log(matriz.length);
//No col (depende del renglon seleccionado)
console.log(matriz[0].length);  //3
console.log(matriz[1].length);  //5

//Renglon pibote
for (let ren=0; ren<matriz.length; ren++){
    // Columnas 
    for(let col=0; col<matriz[ren].length; col++){
        console.log(matriz[ren][col]);
    }
}