a = 5;
b = '5';

// Comparación de igualdad
console.log(a == b); // true
console.log(a === b); // false
// 
console.log (`El valor de a ${a} es igual al valor de b ${b} --> ${a == b}` );
console.log (`El valor de a ${a} es igual al valor de b ${b} --> ${a === b}` );

// Operador distinto

console.log(`${a} != ${b} --> ${a != b}`)
console.log(`${a} !== ${b} --> ${a !== b}`)

// Valor de rango
let minimo =0, maximo=8;
dato = 3;
let dentroRango = dato <= maximo && dato >=minimo;
console.log(` El dato esta sobre el rango --> ${dentroRango}`);