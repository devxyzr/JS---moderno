// Funciones como argumentos

const suma2 = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

const sumarOMultlipicar = (fn) => fn(10, 30);

console.log(sumarOMultiplicar(suma));
console.log(sumarOMultiplicar(multiplicar)); // Toma una funcion como argumento
