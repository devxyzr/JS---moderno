// For... of -> rrecorre un arreglo de maneras mas simplificada

const pendientes = ["Tarea", "Proyecto", "Comer", "Estudiar JS"];

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 600 },
  { nombre: "Tablet", precio: 700 },
  { nombre: "Audifonos", precio: 800 },
  { nombre: "Teclado", precio: 900 },
  { nombre: "Celular", precio: 1000 },
];

for (let pendiente of pendientes) {
  console.log(pendiente);
}

for (let producto of carrito) {
  console.log(producto.nombre);
}
