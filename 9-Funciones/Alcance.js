// Alcance global
var variableGlobal = 5;
variableGlobal = 23;

// Alcance local 
function miFuncion(variableLocal){
    console.log(variableLocal);
    variableGlobal = 2;
}

// Llamar mis funciones

miFuncion(variableGlobal);