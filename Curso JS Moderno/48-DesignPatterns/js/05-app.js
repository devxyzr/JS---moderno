// Module Pattern

// Forma correcta de exportarlo ----------------------------------

const mostrarCliente = (nombre) => {
  console.log(nombre);
};

export default mostrarCliente; // Con export se puede modularizar el codigo

// Forma antigua ------------------------------------------------

const modulo1 = (function () {
  const nombre = "Juan";

  function hola() {
    console.log("hola");
  }

  return {
    nombre,
    hola,
  };
})();
