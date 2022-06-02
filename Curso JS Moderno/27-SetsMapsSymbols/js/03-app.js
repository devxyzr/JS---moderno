// Maps -> listas ordenadas en llave y valor
// Los maps tienen mejor performace que un objeto
// Se puede guardar cualquier tipo de dato
// Llave - valor

const cliente = new Map();

cliente.set("nombre", "rafa");
cliente.set("tipo", "low");
cliente.set("saldo", 3000);
cliente.set([0], true);

console.log(cliente);
console.log(cliente.size); // Retorna el tamaños del mapa
console.log(cliente.has("nombre")); // Retora true en caso de que exita el valor dentro de map, en caso que no retorna un false
console.log(cliente.get("nombre")); // Retorna el valor de la llva en este caso "rafa "

cliente.delete("saldo"); // Elimina el elemento dentro del map

cliente.clear(); // Elimina todos los elementos dentro del map

// Se puede inicializar un map dentro de los parentesis

const paciente = new Map([
  ["nombre", "paciente"],
  ["cuarto", "no definido"],
]);

paciente.set("dr", "Dr Asignado"); // Se puede re escribir la llave dentro de un map
paciente.set("nombre", "Antonio");

paciente.forEach((index, datos) => {
  // Un map pude ser iterable
  console.log(datos);
});

console.log(paciente);
