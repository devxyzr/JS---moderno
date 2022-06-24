// Hoisting -> hace referencia a los procesos de ejecucion
// En la primera etapa resgistra todas las funciones, en la segunda etapa se ejecutan las funciones

// Function declaration ------------------------------------------

obtenerCliente("Juan");

function obtenerCliente(nombre) {
  console.log(`El nombre del cliente es ${nombre}`);
}

// Function expression -------------------------------------------

// En este tipo de funciones JS interpreta la variable que contine las funcion como vacia 


obtenerCliente2("Pablo");
const obtenerCliente2

const obtenerCliente2 = function (nombre) {
  console.log(`El nombre del cliente es ${nombre}`);
};
