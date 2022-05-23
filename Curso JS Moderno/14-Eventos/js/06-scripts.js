// Event bubbling -> los eventos se suelen propagar como si fuera una burbuja.  Es cuando das click a un evento y ese evento se propaga a otros lugares dando resultados no esperados.

// Se puede ir a un elemento padre o a culquiera que tenga seteado el evento

const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

cardDiv.addEventListener("click", (e) => {
  e.stopPropagation(); // Detiene la propagacion de evento
  console.log("click en card");
});

infoDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en info");
});

titulo.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en  titulo");
});
