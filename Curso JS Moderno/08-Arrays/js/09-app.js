//. Foreach para iterar un  arreglo

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 600 },
  { nombre: "Tablet", precio: 700 },
  { nombre: "Audifonos", precio: 800 },
  { nombre: "Teclado", precio: 900 },
  { nombre: "Celular", precio: 1000 },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}
// JS tiene sus propios metodos para iterar sobre un arreglo, rrecorrel el arreglo nombrando a cada uno de sus elementos

carrito.forEach(function (producto) {
  console.log(producto.nombre + producto.precio);
});
