// Numero maximo 10 y -10
let maximo = 10;

for (let numero=1; numero <= maximo; numero+=3 ){
    console.log("Tu numero aumentado es:" + numero);
}
let minimo = -10;
for (let numero=1; minimo <= numero; numero-=3 ){
    console.log("Tu numero aumentado es:" + numero);
}

// Ejercicio suma
let max = 5, suma=0;
for(let numero=1; numero<=max; numero++){
    suma += numero;
console.log("El valor es " + suma);
}
console.log("Ciclo while")
let numero=1;
while (numero<= max){
    suma += numero
    console.log (`El valor de la suma es: ${suma}`);
    numero ++;
}