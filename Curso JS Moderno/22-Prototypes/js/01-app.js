// Prototypes en JS
// __Proto__ -> Hace referencia a funciones que hacen referencai al Objeto

// Objet literal

const cliente = {
  nombre: "Juan",
  saldo: 500,
};

console.log(cliente);
console.log(typeof cliente);

// Objet constructor -> Lo que se conocia anterior mente como pregramcion a objetos

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const juan = new Cliente("juan", 1000);

console.log();
