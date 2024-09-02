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
// let cebolla2 = document.querySelector('.topping');
// let cebolla3 = document.querySelector('li.topping.fondo-marron');
let cebolla = document.querySelector('#cebolla');
console.log(cebolla);

// -------- Seleccionar todos los elementos  ------------
let toppingsAll = document.querySelectorAll('.topping.fondo-naranja');
console.log(toppingsAll);

// -------- Seleccionar todos los elementos  ------------
let cambiarColor = document.querySelector('.topping');
cambiarColor.style.backgroundColor = 'red'; //Cambio el color a traves de la propiedad style

// -------- Imprimir texto  ------------
let listaDeToppings = document.getElementById('lista-toppings');
console.log(listaDeToppings);
console.log(listaDeToppings.innerText); // Solo nos da el texto
console.log(listaDeToppings.textContent); // Conserva los espacios de html
console.log(listaDeToppings.innerHTML); // Retorna la estrucutra HTML

// -------- Modificar texto   ------------
// const titulo = document.getElementById('titulo');
console.log(titulo);
titulo.innerText = 'Mis toppings favoritos'; // cambiar el texto 