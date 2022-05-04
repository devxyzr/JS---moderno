// Crear un arrglo con spread operator, forma declarativa... la que no modifica la variable.

const carrito = [];

const producto = {
  nombre: "Monitor de 32 Pulgadas",
  precio: 800,
};

const producto2 = {
  nombre: "Celular",
  precio: 800,
};

const producto3 = {
  nombre: "Teclado",
  precio: 800,
};

const resultado = [...carrito, producto]; // Forma declarativa, no deja muy claro que se esta haciendo dentro de la funcion.
const resultado = [...resultado, producto2];

console.log(resultado);
console.log(carrito);
