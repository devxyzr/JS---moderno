// Constructor pattern+

// Se tiene un clase base que va ir heredando sobre las demas
// Clase padre ->>> hereda ->>> Clase hija

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

class Cliente extends Persona {
  constructor(nombre, email, empresa) {
    super(nombre, email);
    this.empresa = empresa;
  }
}

const persona = new Persona("juan", "correo@correo.com");
console.log(persona);

const cliente = new Cliente("Miguel", "cliente@cliente.com", "Codigo con Juan");
console.log(persona);
