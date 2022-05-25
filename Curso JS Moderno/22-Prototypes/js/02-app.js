// El problema de no usar prototypes
// Cuando muschos pregaramdores le meten la mano al cofigo, no saben como utlizarlo
// El prototype soluciona con funciones exclusivas del objeto, se recomienda utilizar cuando el proyecto es muy amplio y se esta re escribiendo codigo

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}
// Instacia de Cliente
const juan = new Cliente("juan", 1000);

// Funcion que muestre el nombre y el saldo

function formatearCliente(cliente) {
  const { nombre, saldo } = cliente;
  return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(juan));

// Funcion que muestra propiedades de una empresa
function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}
// Instacia de empresa
const CCJ = new Empresa("Codigo con Juan", 4000, "Cursos en linea ");
