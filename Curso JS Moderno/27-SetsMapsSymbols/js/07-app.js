// Generador -> Un generador es un funcion que retorna un iterador
// Lo caracteriza un *cuando se nombra la funcion
// Cada vez que se escribe .next va a pasar en el siguiente elemtyo dentro del objeto
// Solo se va a ejecutar una vez y se duerme la funcion
// Generador estatico
function* crearGenerador() {
  yield 1;
  yield "juan";
  yield 3 + 3;
  yield true;
}

// const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value); // Accede al primer valor
// console.log(iterador.next()); // Accede al segundo valor
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador);

// Generador para carrito de compras
// Generador de forma dinamica

function* generadorCarrito(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}

const carrito = ["Producto 1", "Producto 2", "Producto 3"];

const iterador = generadorCarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
