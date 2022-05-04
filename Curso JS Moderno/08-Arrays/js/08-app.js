// Destructuring de arrays

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  diponible: true,
};
//Destructurig

const { nombre } = producto;
console.log(nombre);

//Destructuring con arreglos

const numeros = [10, 20, 30, 40, 50];

const [primero] = numeros; // A diferencia de los objetos en un array puedo poner el nombre a liberta porque esta es definida por el indice;

const [, , , tercero] = numeros; // Con una coma separamnos las posiciones de lo arreglos a los cuales queremos acceder. en la posicion que nos interesa sacar de las estructura del objeto vamos a ponerle un nombre.
console.log(tercero);

const [primero, ...tercero] = numeros; // Hacer un array con los valores sobrantes depues del primer elemento.
