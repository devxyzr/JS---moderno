// Object constructor -> es la manera de automatizar los objetos

// Object literal
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//Object constructor

function Producto(nombre, precio) {
  this.nombre = nombre; // This hace referencia asi misma, se contiene por si sola.
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("Monitor 24 pulgadas", 500); // variable que se conviete en objeto, a patir de los elementos que esta definidos en Producto
console.log(producto2);
const producto3 = new Producto("Television", 300);
console.log(producto3);
