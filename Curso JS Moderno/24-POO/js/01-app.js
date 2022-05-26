// Progrmacion orientada a Objetos - POO -> Mejora en la sintaxis del Object constructor

// Hay dos formas de crear clases en JS

// Palabra reservada Class

// Class declaration

class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
}

// Instanciar clase declaration
const juan = new Cliente("Juan", 400);

console.log(juan);

// Class expression

const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
};

// Instanciar clase declaration

const juan2 = new Cliente2("Juan", 400);

console.log(juan2);
