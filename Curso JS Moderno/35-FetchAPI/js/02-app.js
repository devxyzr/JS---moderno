// Consultar con un JSON

// Un JSON es bastante similar a un objeto de JS, la unica diferencia es que las llaves estan detro de un Strig -> Pares de llave - valor
// JS entiende muy bien un JSON

// Leguaje de trasportar respuestas entre leguajes

const cargarJSONBtn = document.querySelector("#cargarJSON");
cargarJSONBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "data/empleado.json";
  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((resultado) => {
      console.log(resultado);
    });
}

// Scripteing para mostrar detos en pantalla

function mostrarHTML({ empresa, id, nombre, trabajo }) {
  const contenido = document.querySelector(".contenido");

  contenido.innerHTML = `<p>Empleado: ${nombre} </p>
  <p>Id: ${id} </p>
  <p>Empleado: ${empresa} </p>
  <p>Empleado: ${trabajo} </p>`;
}
