// Traer los datos del local storage de vuelta

const nombre = localStorage.getItem("meses"); // .getItem para obtener el valor del local storge

// console.log(meses);

const productoJSON = localStorage.getItem("producto");
console.log(JSON.parse(productoJSON)); // Retorna desde el local storage un string y lo convierte en un objeto.

const meses = localStorage.getItem("meses");
const mesesArray = JSON.parse(meses);
console.log(mesesArray);
