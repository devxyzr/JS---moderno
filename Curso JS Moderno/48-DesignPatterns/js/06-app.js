// Mixin -> Agregar funciones a una clase una vez ha sido creada

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

class Cliente {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

const funcionesPersonas = {
  msotrarInformacion() {
    console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`);
  },
  mostrarNombre() {
    console.log(`Mi nombre es ${this.nombre}`);
  },
};

//Añadir funciones Persona a la clase de Persona

Object.assign(Persona.prototype, funcionesPersonas);
Object.assign(Cliente.prototype, funcionesPersonas);

const cliente = new Persona("juan", "correo@correo.com");

console.log(cliente);
cliente.msotrarInformacion();
cliente.mostrarNombre();

const cliente2 = new Cliente("Cliente", "cliente@cliente.com");

console.log(cliente2);
cliente2.msotrarInformacion();
cliente2.mostrarNombre();
