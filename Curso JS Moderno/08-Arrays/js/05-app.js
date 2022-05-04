//Añadir nuevos elemtos al fin o inicio de un array

const meses = ["enero", "febrero", "Marzo"];

meses[3] = "abril"; // Se agrega la poscison de arreglo, de forma dinamica

// Agregar al final de arreglo

meses.push("mayo");
meses.push("junio");

console.table(meses);

const carrito = [];

// Difinir un producto -> Forma imperativa, porque modifica la variable original, trbajas, reescribe y modofica los datos.

const producto = {
  nombre: "Monitor de 32 Pulgadas",
};

const producto2 = {
  nombre: "Celular",
  precio: 800,
};

const producto3 = {
  nombre: "Teclado",
  precio: 800,
};

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3); // Agregar al inicio de array los elementos

console.table(carrito);
