//Object .keys, .values y .entries -> metodos para objectos

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

console.log(Object.keys(producto)); // Nos retorna un arreglo con los keys (llaves -> {}) del objeto parte de la izquierda.

console.log(Object.values(producto)); // Nos retorna los valores del las propiedades del objeto , parte de la derecha.

console.log(Object.entries(producto)); // Nos devuelve todo en pares.
