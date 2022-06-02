// Set maps y simbols

// Set -> Permite crear una lista de valores que no se duplican, cuando maneja un volumen de datos muy grandes tienden a ser mas rapido que un objeto o array
// Si se intenta agregar un segudo elemento respetiod no lo va agregar
// Es sensitivo a mayusculas y minusculas
// No existe la llave valor dentro de un set, lo que quiere decir que no existe el index a diferencai de un objeto un agarreglo

const carrito = new Set();

carrito.add("camisa");
carrito.add("cosa 1");
carrito.add("cosa 2");
carrito.add("cosa 3");
carrito.add("cosa 4");
carrito.add("camisa");

carrito.delete("cosa 3"); // .delete para eleiminar un elemento dentro del set

console.log(carrito.has("git")); // Comprobar si hat un elemento dentro del set

console.log(carrito.size); // .size nos dice de cuanto es el tamaño del set

// carrito.clear(); // .Clear vacia los elementos del set

console.log(carrito);

carrito.forEach((producto) => {
  console.log(producto);

  // Los set pueden ser iterables por distintos metodos
});

// Ejemplo del uso de un set, del siguiente arreglo eliminar los duplicados
// Se para el array por un set que va a devolver los elementos nos duplicados

const numeros = [10, 20, 30, 40, 50, 60, 70, 10];

const noDuplicados = new Set(numeros);
console.log(noDuplicados);
