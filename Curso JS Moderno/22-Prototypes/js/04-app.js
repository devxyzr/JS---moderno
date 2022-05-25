// Hererdar prototypes

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
  let tipo;
  if (this.saldo > 10000) {
    tipo = "gold";
  } else if (this.saldo > 5000) {
    tipo = "platino";
  } else {
    tipo = " Normal ";
  }
  return tipo;
};

Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre: ${this.nombre}, Saldo ${
    this.saldo
  }, Tipo cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retirarSaldo = function (retira) {
  this.saldo -= retira;
};

// Heredar de cliente a persona, se le heredan los datos de

function Persona(nombre, saldo, telefono) {
  Cliente.call(this, nombre, saldo);
  this.telefono = telefono;
}

// Instaciar funciones de del prototype de Cliente, estos se deebn crear antes de que se intancien

Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.constructor = Cliente;

// Instanciarlo

const juan = new Persona("Juan", 5000, 132456);
console.log(juan);
console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function () {
  return `El telefono de esta persona es ${this.telefono}`;
};

console.log(juan.mostrarTelefono());
