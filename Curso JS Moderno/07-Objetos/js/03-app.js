// Agregar o eliminar propiedades de un objeto.

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

// Agregar nuevas propiedades a un objeto.

producto.imagen = "imagen.jpg"; // cuando estamos fuera del objeto ya no usamos la sintaxis de dos puntos.

//Eliminamos propiedades del objeto.

delete producto.precio; //palabra reservada delete, nombre del objeto sintaxis de punto y propiedad que se va eliminar.

console.log(producto);
