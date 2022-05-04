const carrito = [];

// Definir un produto

const producto = {
  nombre: "Televisor oled 24 pulgadas",
  precio: 400,
};

const producto2 = {
  nombre: "Celular",
  precio: 800,
};

const producto4 = {
  nombre: "Lavadora",
  precio: 550,
};
// .push agrega al final de un arreglo

carrito.push(producto2);
carrito.push(producto);

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

carrito.unshift(producto3);

console.table(carrito);

// // Eliminar el unltimo elemento de un arreglo .pop()

carrito.pop();

console.table(carrito);

// // Eliminar del unicio del arreglo .shift()

carrito.shift();

console.log(carrito);

// Elimianr de un elementos de la mitad del arreglo, del inico o del final.

carrito.splice(1, 1);
console.log(carrito);
