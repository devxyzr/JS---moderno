// Concatenacion de Strings

const producto = "Monitor 20 pulgadas";
const precio = "30 USD";

// Se concatena producto + precio a travez de el metodo .concat

console.log(producto.concat(precio));

// Se puede concatenar no solo una variable si no tambien un string

console.log(producto.concat(" en descuento"));

// Se puede concatenar tmabien con el operador de +

console.log(producto + "Con un precio de:" + precio);
console.log("El producto " + producto + " tiene un precio de " + precio);

//Concatenacion con coma (,)

console.log("El producto ", producto, " tiene un precio de ", precio);

// Se puede concantenar con backtick `` seguido del signo ${} para las variables

console.log(`El producto ${producto} tiene un precio de $ ${precio}`);
