// .every todos los elemetos de un arreglo deben cumplir con la misma condicion para que nos restorne un true.

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Revisa que todos elementos cumplan con los elementos.

const resultado = carrito.every((producto) => producto.precio > 50);
console.log(resultado);

const resultado2 = carrito.some((producto) => producto.precio > 50);
console.log(resultado2);
