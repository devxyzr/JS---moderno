// El problema de los objetos

// Las propiedades de un objeto si se pueden re escribir o eliminar.

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

// La varibales escritas con conts no se pueden re asignar.

producto.disponible = false; // Reasignando la propiedad a un objeto ya definido.
delete producto.precio; // Elimina la propiedad del mi objeto
console.log(producto);
