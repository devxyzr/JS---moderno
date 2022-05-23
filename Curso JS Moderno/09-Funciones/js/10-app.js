// Arrow functions revolucion la forma de escribir JS

//Es otra forma de escribir funciones

const aprendiendo = function () {
  console.log("Aprendiendo JS");
};

// La funcion de arriba la podemos hacer mucho mas corta aun..
// La palabra reservada Funtion se elimina y pasa al lado derecho del parentesis como un =>
// Cuando hay funciones de un sola linea no es necesario meterla ente {}

const aprendiendo2 = () => "Aprendiendo JS";
console.log(aprendiendo2());
