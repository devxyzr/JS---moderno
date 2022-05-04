// Como unir dos objetos

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};

console.log(producto);
console.log(medidas);

// object assing

const resultado = Object.assign(producto, medidas); // Va unir dos objetos y los va a guardar dentro de una variable.

//Spread Operator o Rest Operator
// (...)  los tres puntos significan tomar un copia de los objetos
const resultado2 = { ...producto, ...medidas };

console.log(resultado);
console.log(resultado2);
