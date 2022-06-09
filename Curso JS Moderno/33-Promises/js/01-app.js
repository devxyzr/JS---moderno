// Promises, callbacks y programacion Asincrona

// CallBacks -> Llamar de vuelta - Una funcion que ejecuta una funcion que se ejecuta de vuelta.

const paises = ["Francia", "España", "Portugal", "Australia", "Inlaterra"];

// Agrega un nuevo elemento al arreglo y vuelve a cagar la funcion despues de que se ejecuta una vez

function nuevoPais(pais, callback) {
  setTimeout(() => {
    paises.push(pais);
    callback();
  }, 1000);
}

function mostrarPaises() {
  setTimeout(() => {
    paises.forEach((pais) => {
      console.log(pais);
    });
  }, 1000);
}

mostrarPaises();

nuevoPais("Alemania", mostrarPaises);
