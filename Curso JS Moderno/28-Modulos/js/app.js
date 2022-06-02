// El import se pone siempre en la primera linea

import nuevaFuncion, {
  nombreCliente2,
  ahorro,
  mostrarInformacion,
  tieneSaldo,
  Cliente,
} from "./cliente.js"; // Importando la variable desde cliente JS

nuevaFuncion(); // Solo puede haber un export default

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente2, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente2, ahorro);

console.log(cliente.mostrarInformacion());

// Importar empresa

import { Empresa } from "./empresa.js";
const empresa = new Empresa(`Codigo con Juan`, 100, `Aprendizage en linea`);
