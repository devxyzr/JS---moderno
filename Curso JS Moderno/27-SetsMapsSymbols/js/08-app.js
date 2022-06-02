// Iteradores dentro de JS

const cuidades = ["Londres", "New York", "Madrid", "Paris"];
const ordenes = new Set([123, 321, 456, 798, 456]);
const datos = new Map();

datos.set("nombre", "juan");
datos.set("profesion", "Desarrollador Web");

// default
for (let ciudad of cuidades) {
  console.log(ciudad);
}

for (let orden of ordenes) {
  console.log(ordenes);
}

for (let dato of datos) {
  console.log(dato);
}

// Iterador entries -> devuelve lleve y valor

for (let entry of cuidades.entries()) {
  console.log(entry); // Devuelve llave valor (Posicion, valor)
}

for (let entry of ordenes.entries()) {
  console.log(entry); // Devuelve llave valor (posicion y valor son el mismo) agrega un valor al set, porque este no tiene valor
}

for (let entry of datos.entries()) {
  console.log(entry); // Devuelve llave y valor que se contruyen con un map
}

// Values iterator -> Devuelves lo valores de los arreglos

for (let value of cuidades.values()) {
  console.log(value);
}

for (let value of ordenes.values()) {
  console.log(value);
}

for (let value of datos.values()) {
  console.log(value);
}

// keys iterator -> Devuelve las lleves de los arreglos

for (let keys of cuidades.keys()) {
  console.log(keys);
}

for (let keys of ordenes.keys()) {
  console.log(keys);
}

for (let keys of datos.keys()) {
  console.log(keys);
}
