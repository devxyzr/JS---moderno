// Creando un prototype

// Objeto de cliente

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

// Funciones exclusivas para el tipo de cliente
// Se llama al objeto y se usa la sintaxis de punto.
// Va aparecer dentro de __proto___ una funcion que se llame tipoCliente
// El proto va mantener la referencia hacia el objeto actual
// Se puede hacer referencia al objeto o a un prototipe hermano.

// Evalua el saldo que tiene el objeto del cliente y lo va a clasificar
Cliente.prototype.tipoCliente = function () {
  // Funcion() va a buscar dentro del objeto cliente y no se va ir al objeto global.
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

// Instaciar un objeto

// Objeto contructor

const pedro = new Cliente("Pedro", 6000);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retirarSaldo(1000);
console.log(pedro.nombreClienteSaldo());

// Objeto de empresa.

// function Empresa(nombre, saldo, categoria) {
//   this.nombre = nombre;
//   this.saldo = saldo;
//   this.categoria = categoria;
// }

// const CCJ = new Empresa("Codigo con Juan", 4000, "Cursos en linea ");
// console.log(CCJ);
