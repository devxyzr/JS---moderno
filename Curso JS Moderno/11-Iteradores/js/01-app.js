// Iteradores -> For loop, en le caso de los iteradores el codigo va hasta que una condicion se cumpla o se deje de cumplir.
// Foor loop -> se ejecuta  hasta que la funcion se deje de cumplir.
// Foor loop cosnta de 3 partes, la primer parte es el inicilizador es decir donde inicia el valor.
// La segunda parte es el valor que vamos a revisar..
// La tercera parte hace referencia al aumento
// Para que el codigo no se ejecute mas veces, i debe ser menor a al tamaño de arreglo.

for (let i = 0; i < 10; i += 5) {
  console.log(`Numero: ${i}`);
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`El numero ${i} es par`);
  } else {
    console.log(`El numero ${i} es impar`);
  }
}

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 600 },
  { nombre: "Tablet", precio: 700 },
  { nombre: "Audifonos", precio: 800 },
  { nombre: "Teclado", precio: 900 },
  { nombre: "Celular", precio: 1000 },
];

for (i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}
