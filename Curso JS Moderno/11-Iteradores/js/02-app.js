// break and continue en un for loop
// Break va a cortar las ejecucion de un for loop
//Continue va permitir intercetar un elemento
//Crea un foorloop que al detectar el elemento NO.5 detenga su ejecucion.

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("CINCO");
    break; // Esta palabra es la que rompe la ejecucion del if o del ciclo con que se esta trabajando.
    continue; // Detiene la ejecicion del if donde se le indica y vuelve a iniciar la ejecucion.
  }
  console.log(`Numero: ${i}`);
}

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 600 },
  { nombre: "Tablet", precio: 700, descuento: true },
  { nombre: "Audifonos", precio: 800 },
  { nombre: "Teclado", precio: 900 },
  { nombre: "Celular", precio: 1000 },
];

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
    continue;
  }
  console.log(carrito[i].nombre);
}
