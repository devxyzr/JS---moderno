// For... in
// For in itera sobre objetos
// Sintaxis similar a la del for of

const automovil = {
  modelo: cancelAnimationFrame,
  año: 1969,
  motor: "6.0",
};

for (let propiedad in automovil) {
  console.log(propiedad);
}

for (let [llave, valor] of Object.entries(automovil)) {
  console.log(valor);
  console.log(llave);
}
