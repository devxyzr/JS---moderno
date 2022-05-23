// Todos los elementos hacen referencia al document y hace refenrecia a elementos del htlm a imagene, scritps y hojas de estilo.

let elemento;

elemento = document; // Hace referencia a todo el documento HTML
// elemento = document.all;
elemento = document.head; // Selecciona la parte del head del elemento HTML
elemento = document.body; // Seleccion al parte del body del elemento HTML
elemento = document.domain; // Muestra en URL esta alojadp la PG WEB.
elemento = document.forms; // Muestra lo formularios que existan del HTML - El formulario dentro del HTML secomparte caracteristicas similares a un array.
elemento = document.forms[0]; // Accede a elementos de formulario por su indice
elemento = document.forms[0].id; // Accede por is ID
elemento = document.forms[0].method; // Accede por el methodo del formulario
elemento = document.forms[0].classList; // Accede por la class list
elemento = document.forms[0].action; // Accede por la accion
elemento = document.links;
elemento = document.links[4]; // Accerder a los links que estan dentro del HTML a travez de su indice
elemento = document.links[4].classList; // Devuelve la lista como un arreglo
elemento = document.links[4].className; // Devuelve el nombre del link en su indice como un string.

elemento = document.images; // Devuelve la imagenes que hay dentro de sitio web

elemento = document.scripts; //Devuelve los scripts dentro de la pagina web.
console.log(elemento);
