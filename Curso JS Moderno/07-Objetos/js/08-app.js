// Congelar un objeto para no podemos modificar.

"use strict"; // Modo estricto en JS, habilitarlo va exigir que cumplamos con ciertas reglas a la hora de escribir el codigo de JS.
// Una vez habilitado el "use strict" se activan los --> object metodo

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

Object.freeze(producto); // No va permitir modificar la propiedades de que se le indique dentro del proyecto.
console.log(object.isFrozen(producto)); // Metodo para saber si un objeto esta congelado.

producto.disponible = false; //Modificacion objeto
producto.imagen = "imagen.jpg"; // Modificacion objeto

console.log(producto);
