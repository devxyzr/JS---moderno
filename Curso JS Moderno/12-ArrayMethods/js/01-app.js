// Array Methods -> hacen el trabajo pesadop por nosotros.

// Arreglo de indices
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

// Comprobar si un valor existe en un arreglo.
// Si queremos verificar que un valor existe debemos poner un if

meses.forEach((mes) => {
  if (mes === "Enero") {
    console.log("Enero si existe");
  }
});

// Array Metodos .includes, funciona con arreglos basado en un indice

const resultado = meses.includes("Diciembre");
console.log(resultado);

// Arreglo de Objetos
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// En un arreglo de objetos si utilza .some

const existe = carrito.some((producto) => {
  return producto.nombre === "Celular";
});

console.log(existe);

// En un arreglo tradicional con .some tmabien soporta un arreglo tredicional de indices.

const existe2 = meses.some((mes) => mes === "Febrero");
console.log(existe2);
