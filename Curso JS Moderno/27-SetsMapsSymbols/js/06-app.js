// Iteradores dentro de JS

function crearIterador(carrito) {
  // La funcio va iterar sobre el carrito de compras

  return {
    siguiente: () => {
      const fin = i > carrito.lenght;
      const valor = !fin ? carrito[i++] : undefined;
      return {
        fin,
        valor,
      };
    },
  };
}

const carrito = ["Producto 1", "Producto 2", "Procducto 3", "productoNuevo"];

// Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
