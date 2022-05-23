// QuerySelector - Permite elecionar ID y clases - Sitaxis similar a la de CSS
// El querySelector solo va a retornar el primero que encuentre.

const card = document.querySelector(".card");
console.log(card);

const info = document.querySelector(".premium .info"); // Sintaxis similar a la de CSS
console.log(info);

// Selecionar el segundo card de Hospedaje
// Se pueden selccionar los selectores tan especificos como se pueda. EJ = Section.hospedaje. .card

//.card:nth-child(2) -> Permite seleccionar a hijo correspondiente (2) dentro de un seccion de CSS

const segundoCard = document.querySelector(
  "section.hospedaje .card:nth-child(2)"
);

// Seleccionar formulario de ID
// Se puede ser igual de especificio como en CSS

const formulario = document.querySelector("#formulario");
console.log(formulario);

// Selecionar elementos de HTML por su etiqueta
// Retorna la primera etiqueta que contenga el nav -> Solo un resultado

const navegacion = document.querySelector("nav");
console.log(navegacion);
