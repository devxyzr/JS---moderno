// Cluseres

const cliente = "Juan";

function mostrarCliente() {
  // La variable e cliente solo existe dentro de la funcion
  const cliente = "Pablo";

  console.log(cliente);
}

console.log(cliente);

mostrarCliente();

// -------------------------------------------

const obtenerCliente = () => {
  const nombre = "Juan";

  function muestraNombre() {
    console.log(nombre);
  }
  return muestraNombre;
};

const cliente = obtenerCliente();

cliente();
