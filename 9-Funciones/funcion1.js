// Estructura de funcion
function saludar (mensaje){
    //Cuerpo de la funcion
    console.log(`Mi mensaje es: ${mensaje}`);
}
// LLamar al procedimiento
saludar('Hola');

// funcion suma
function sumar (a,b){
    resultadoSuma = a +b;
    return resultadoSuma;
}
sumar(15,85);
console.log(`El valor de la suma es: ${resultadoSuma}`)

// Paso por valor
    // Nos sirve para pasar informacion de tipo primitivo (number, bool o string)
    function cambiarValor (parametro){
        parametro =15;
    }

    let argumento = 10;
    cambiarValor (argumento);
    console.log(`Valor: ${argumento}`);

// Paso por referencia
console.log("------------ Paso por referencia -------------")

function cambiarValor2 (parametro){
    parametro[0]= 15;
}

let arreglo=[10];
console.log(`Antes de la funcion: ${arreglo}`);
cambiarValor2(arreglo);
console.log(`Despues de la funcion: ${arreglo}`);

