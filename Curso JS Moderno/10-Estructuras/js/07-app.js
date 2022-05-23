// Operador OR -> va a revisar que se cumpla cualquiera de dos condiciones. Por una condicion o la otra.

const efectivo = 400;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
  // Se estan cumpliendo una de las tres varibles
  console.log("Si podemos pagar");
} else {
  console.log("Fondos insuficientes");
}
