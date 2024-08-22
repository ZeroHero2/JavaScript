
// Declarar una funcion
function multiplicar (x, y){
    return x*y;
}

console.log(multiplicar(13,98));


// Declarar una funcion 
function calcularDescuento (precio, descuentoPorcentaje){
    const descuento = (precio * descuentoPorcentaje) / 100;
    const precioConDescuento = precio - descuento;
    
    return precioConDescuento;
    }
    
    const precio = 100;
    const descuentoPorcentaje = 20;
    const calcularPrecioDescuento = (precio - descuentoPorcentaje)
    
    console.log("El precio original es: " + precio);
    console.log("El descuento original es: " + descuentoPorcentaje + "%");
    console.log("El precio con descuento: " + calcularPrecioDescuento)