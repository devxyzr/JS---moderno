// Simbols -> Permite creer una propiedad unica
// No puede haber dos iguales
// Las propiedades que utilizan un symbol son son iterables
// Cuando se crea un symbol se le puede añadir un descripcion a ese symbol

const sym = Symbol("1");
const sym2 = Symbol("1");

if (sym === sym2) {
  console.log("son iguales");
} else {
  console.log("son diferentes");
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto

persona[nombre] = "Juan"; // entre [] es que se agrega el valor de symbol al objeto
persona[apellido] = "Perez";
persona.tipoCliente = "Premium";
persona.saldo = 500;

console.log(persona);
console.log(persona[nombre]);

// Cuando se crea un symbol se le puede añadir un descripcion a ese symbol

const nombreCliente = Symbol("Nombre del cliente"); // En este caso no utilizamos el new
const cliente = {};

cliente[nombreCliente] = "Pedro";

console.log(cliente);
console.log(nombreCliente); // Muestra la descripcion del symbol
