// Traversing de DOM -> Ir recorriendo el DOM

// En JS todo esta conectado al document, la forma en como moverse entre los distintos elementos se conoce como traversing de DOM

// A las etiquetas de  <a href="#">Vender</a> se le conoce como nodoss

// Nodos > Conectados al DOM

// .children va a listar los elementos que sean hijos de elementos que le estemos aplicando el metodo.
const navegacion = document.querySelector(".navegacion");
console.log(navegacion.firstElementChild); // Trae el pimer elemento de los nodod de navegacion
console.log(navegacion.lastElementChild); // Trae el ultimo elemento de los nods de navegacion

console.log(navegacion);
console.log(navegacion.childNodes); // Acceder a los distintos nodos. - Los espacios en blanco son considerados elementos. (Saltos de linea representados como Text)
console.log(navegacion.children); // Acceso a los nodos REALES <a>
console.log(navegacion.children[1].nodeType); // ELEMENT_NODE en la Documentacion.
console.log(navegacion.children[1].nodeName); // El nombre de la etiqueta

const card = document.querySelector(".card");
card.children[1].children[1].textContent = "Modificando desde el DOM en JS";
console.log(card.children[1].children[1].textContent); // .children va a listar los elementos que sean hijos del card
card.children[0].src = "img/hacer2.jpg"; // Cambiando la IMG desde el traversing del DOM!!!!
console.log(card.children[0]);

// Traversing de DOM del hijo hacia el padre

console.log(card.parentElement.parentElement.parentElement); // Accedemos al padre de la clase card

// Traversing del DOM con elementos hermaos dentro de un mismo padre. Se recorre hacia los hermanos que estan mas abajo.

console.log(card);
console.log(card.nextElementSibling); // Acceso al hermano de .card
console.log(card.nextElementSibling.nextElementSibling);

// Traversing de DOM desde elementos hermanos [4] -> Ultimo elemento hacia otro hermano mas arriba de su posicion  [3]

const ultimoCard = document.querySelector(".card:nth-child(4)"); // Se viaja hasta la card No. 4
console.log(ultimoCard.previousElementSibling); // Accedemos al elemeto hermano No.3
