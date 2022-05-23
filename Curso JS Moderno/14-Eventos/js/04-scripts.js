// Evento que suceden en un formulario -> solo uno

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", validarFormulario); // Tmabien se le puede pasar una funcion declaritva dentro de los parametros del la funcion

function validarFormulario(e) {
  e.preventDefault(); // Prevenir hacer la accion que haria por defecto
  console.log("Consultar una API");

  console.log(e.target.action);
}
