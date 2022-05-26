// Metodos y metodos estaticos a nuestras clases

class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
  mostrarInformacion() {
    // La forma en como se añade un metodo a la clase
    return `Cliente:${this.nombre} tu saldo es de ${this.saldo}`;
  }

  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

// Instanciar clase declaration

const juan = new Cliente("Juan", 400); // Objeto
console.log(juan.mostrarInformacion()); // Se accede al metodo dentro de la clase

console.log(juan);
