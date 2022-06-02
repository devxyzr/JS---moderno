// WeakSet -> conocido como set debil
// A diferemcaia del Set que recibe cualquier tipo de dato, en el WeakSet solo va recibir valores como objeto s

const weakset = new WeakSet();

const cliente = {
  nombre: "juan",
  saldo: 100,
};

weakset.add(cliente); // Añadiendo el objeto al weakset
// weakset.add(nombre);

// console.log(weakset.has("nombre"));

weakset.delete(cliente);

console.log(cliente.size); // No se pueden conocer la extension de

console.log(weakset);
