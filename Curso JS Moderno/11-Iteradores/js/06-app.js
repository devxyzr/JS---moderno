// .forEach ideal para recorrer arrelgos, va ejecutarse por lo menos una vez por cada vez que haya elemtos en el arreglo
// El .forEach funciona como un arrow funcion, tiene una sintaxis similar si no es que es igual.
// El .forEach es ideal para recorrer los arreglos.
// Dendro de () entra cada elemento como argumento.
// .map contiene la misma sintaxis del forEach la diferencia es que crea un arreglo nuevo mientras corre dentro del array, el arreglo se configura dependiendo de como se configure el .map

const pendiente = ["Tarea", "Proyecto", "Comer", "Estudiar JS"];

pendiente.forEach((pendiente, i) => console.log(`${i} : ${pendiente}`));

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 600 },
  { nombre: "Tablet", precio: 700 },
  { nombre: "Audifonos", precio: 800 },
  { nombre: "Teclado", precio: 900 },
  { nombre: "Celular", precio: 1000 },
];

const nuevoArreglo = carrito.forEach((producto) => producto.nombre);

const nuevoArreglo2 = carrito.map((producto) => producto.precio);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
