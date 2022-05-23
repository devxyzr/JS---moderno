// Funciones que retornan valores:

// Trabajar con los resultados de las funciones, las funciones retornan un valor.
// Cuando hay una funcion que retorna un valor, debe haber una varible que guarde ese valor.

function sumar(a, b) {
  return a + b;
}

const resultado = sumar(2, 3);

console.log(resultado);

// Ejemplo mas avanzado

let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}
function calcularImpuesto(total) {
  return total * 1.15;
}

total = agregarCarrito(300); // Retornamos sobre el total porque vamos a trabaja con ese valor.
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);
console.log("El total al pagar es " + totalPagar);

console.log(total);
