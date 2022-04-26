// Cortar espacios en blanco en un string

// Metodos para eliminar el espacio en blanco al inicio y al final de una cadena de texto.

const producto = "               Monitor 20 pulgadas                  ";
const precio = "30 USD";

console.log(producto);
console.log(producto.length); // El unico metodo que no0 necesita parentesis

// Eliminar espacio en blanco en ambas direcciones

console.log(producto.trim());

// Eliminar desde el inicio

console.log(producto.trimStart());

// Eliminar desde el final

console.log(producto.trimEnd());

// Metodos en forma encadenada, dos metodos dentro de una misma linea.

console.log(producto.trimStart().trimEnd());
