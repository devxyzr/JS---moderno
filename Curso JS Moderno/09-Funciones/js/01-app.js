// Funciones- Crear funciones en JS -> una serie de procedimientos  o intrucciones, que permiten tener un condigo re utilizable y facil de mantener, tmabien pueden ser re utilizables.
// Existen dos formas de crear una funcion
// La funcion nos permite dividir el codigo en pequeñas partes para resolver un problema.

// Declarar una funcion (Function Declaration)

// Palabra reservada FUNCION
// Nombre de la funcion -> igual que las reglas de las variables
// () -> Parentesis se agregan los parametros de la funcion
// {} -> Cuerpo de la Funcion

function sumar() {
  console.log(2 + 2);
}

sumar(); // Llamado de funcion para que se ejecute

// Expreccion de funcion (Funcion expression)

// Es como si una variable fuera igual a una funcion
// Funcion anonima

const sumar2 = function () {
  console.log(3 + 3);
};

sumar2();
