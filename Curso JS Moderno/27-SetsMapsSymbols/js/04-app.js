//weakMap ->  mapas debiles -> SOLO ACEPTAN OBJETOS
// Al igual que el map, son llave y valor
// No se pueden iterar con un ForEach
// No se puede conocer la longitud del weakMap

const producto = {
  idProducto: 10,
};

const weakmap = new WeakMap();

weakmap.set(producto, "monitor");

console.log(weakmap.has(producto));
console.log(weakmap.get(producto));
console.log(weakmap.get(producto));

console.log(weakmap.size);

console.log(weakmap);
