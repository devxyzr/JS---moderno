// concat -> va a permitir unir dos arreglos

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = ["Agosto", "Septiembre"];
const meses3 = ["Octubre", "Noviembre"];

const resultado = meses.concat(meses2, meses3, "Otro mes"); // Se le puede concatenar directamente dentro de la funcion un string

// El orden de como se concatena los arregloses importante.

console.log(resultado);

// spread operator (...) -> copia directamente el array

const resultado2 = [...meses, ...meses2, ..."Otro mes"]; // Si se agrega un string como un spread operator va a pasarse como un array conformada por sus mismas letras.
console.log(resultado2);
