// Fetch API -> Para obtener datos de servidores o API
// FETCH API -> Solo puede leer texto plano o JSON

// Utiliza promsies integrados dentro del Fetch

const cargarTxtBtn = document.querySelector("#cargarTxt");
cargarTxtBtn.addEventListener("click", obtenerDatos);

// Marca un estado 404 o un 202, dependiendo de lo que sean

function obtenerDatos() {
  const url = "data/datos.txt";
  fetch(url)
    .then((respuesta) => {
      console.log(respuesta);
      console.log(respuesta.status);
      console.log(respuesta.statusText);
      console.log(respuesta.url);
      console.log(respuesta.type);

      return respuesta.text();
    })
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.log(error);
    });
}
