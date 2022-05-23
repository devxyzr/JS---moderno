const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 600 },
  { nombre: "Tablet", precio: 700 },
  { nombre: "Audifonos", precio: 800 },
  { nombre: "Teclado", precio: 900 },
  { nombre: "Celular", precio: 1000 },
];

// metodo .map va a llenar una variable con un arreglo nuevo

const nuevoArreglo = carrito.map(
  (producto) => `${producto.nombre} - Precio: ${producto.precio}`
);
console.table(nuevoArreglo);

// JS tiene sus propios metodos para iterar sobre un arreglo, rrecorrel el arreglo nombrando a cada uno de sus elementos

const nuevoArreglo2 = carrito.forEach(
  (producto) => `${producto.nombre} - Precio: ${producto.precio}`
);
console.table(nuevoArreglo2);
