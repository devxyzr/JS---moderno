// Comparador estricto
// == Igual a // Operador que no es estricto
// != Diferente a
// === Operador estricto compara entre valor y tipo de dato.

const puntaje = 10000;
const puntaje2 = "1000";

if (puntaje != 1000) {
  console.log("Es diferente");
}

if (puntaje !== "1000") {
  console.log("Si es igual");
} else {
  console.log("No es igual");
}
