// Destrugturin de objetos

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

// Asignar un valor a su propia variable.

//const nombre = producto.nombre; // Se extrae el valor del nombre y se le asiga a una misma variable.

// Destructuring. -> Sacar de una estructura

const { nombre } = producto;
const { precio } = producto;

const { precio, nombre, disponible } = producto; // Sacar varias propiedades a la vez.

console.log(precio);
