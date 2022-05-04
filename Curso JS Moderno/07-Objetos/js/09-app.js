// Sellar un objeto

"Use strict";

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

Object.seal(producto); // No se puede agregar ni eliminar propiedades pero si se pueden modificar.

producto.disponible = false; // Puedo cmabiar el estado del producto

console.log(producto);

console.log(object.isSealed(producto)); // Pregunta si el objeto esta sellado
