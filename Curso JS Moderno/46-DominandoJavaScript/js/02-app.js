// Coercion -> Es la conversion automatica de o impilicita de valores de un tipo dado a otro.

// Coercion implicita, se esta forzando a JS a que lo haga
// Se esta tratando de sumar un numero y un "String a la vez"

const numero1 = 20;
const numero2 = "40";

console.log(numero1 + numero2); // Implicita

// Coercion explicita -> Estamos convirtiendo el string a numero

console.log(Number(numero2)); // Explicita

console.log(numero1.toString());

// ----------------------- Explicita
const pedido = [1, 2, 3, 4];
console.log(pedido.toString());
console.log(JSON.stringify(pedido));
