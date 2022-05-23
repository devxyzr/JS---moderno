// Query selectorAll - Selecciona clases , elmentos, id de el document de HTML.
// . para clases
// # para ID
// <> elementos de HTML

// Se puede ser lo mas especifico que se quiera con los selectores de CSS

// QuerySelectorAll retona todos lo elemtos que cumplan con la condicion del selector

const card = document.querySelectorAll(".card");
console.log(card);

const formulario = document.querySelectorAll("#formulario");
console.log(formulario);

// Si un elemento no existe

const noExiste = document.querySelectorAll("no-existe");
console.log(noExiste);
