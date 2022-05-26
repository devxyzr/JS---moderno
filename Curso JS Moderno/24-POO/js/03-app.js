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

//Herencia

class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    super(nombre, saldo); //Busca dentro de las clase cliente los atributos de nombre y saldo
    this.telefono = telefono;
    this.categoria = categoria;
  }
  static bienvenida() {
    // Re escribiendo un metodo, se puede nombrandolo de la misma forma...
    return `Bienvenido al cajero de empresas`;
  }
} // Empresa seria una calse hijo de cliente y se podria re escribir el contructor que esta llenado la calse

// Instanciar clase declaration

const juan = new Cliente("Juan", 400);
const empresa = new Empresa(
  "No entienod un culo",
  500,
  186773256,
  "Aprendizage en linea"
);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
