// Separar los datos de la funciones

const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500 },
  { nombre: "Television 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 700 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

// Hihgder order functions

// El argumento de la funcion filter es otra funcion que hace el filtrado

const mayor400 = (producto) => {
  return producto.precio > 400;
};

const resultado = carrito.filter(mayor400);

console.log(resultado);
