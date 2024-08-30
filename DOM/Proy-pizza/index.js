// -------- Obtener elemento en base a su ID ------------
// Obtener elemento por el id
// .getElementByid()
const contenedor = document.getElementById('contenedor');
console.log(contenedor.innerHTML); // Se accede a la estructura HTML de esa etiqueta
// Crear variable texto
const titulo = document.getElementById('titulo');
console.log (titulo.innerText); // Se devuelve el texto de la etiqueta inner = interno 
console.log (titulo.tagName); // Devuelve la etiqueta 

// -------- Obtener elemento en base a su clase ------------
const toppings = document.getElementsByClassName('topping');
console.log(toppings);
console.log(toppings[3]); // Acceder a un elemento especifico

// -------- Obtener elemento que tenga una etiqueta en especifico ------------
let misToppings = document.getElementsByTagName('li');
console.log(misToppings);

// -------- Seleccionar un elemento en especifico  ------------
let cebolla = document.querySelector('#cebolla');
console.log(cebolla);