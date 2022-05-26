// Propiedades privadas en JS
// Las propiedades del objeto pueden ser publicas

class Cliente {
  #nombre; // Solo se puede acceder desde clasae con otro atributo, se vuelve una propiedad privada

  // Cuando la propiedad se hace privada, solo se puede acceder desde la clase

  constructor(nombre, saldo) {
    this.#nombre = nombre; // Propiedades del objeto
    this.saldo = saldo;
  }
  mostrarInformacion() {
    return `Cliente:${this.nombre} tu saldo es de ${this.saldo}`;
  }

  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

const juan = new Cliente("Juan", 200);

console.log(juan.#nombre);
