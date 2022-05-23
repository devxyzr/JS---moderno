// Eliminar un elementos desde el DOM
// Dos manera de elimanr el elementos -> 1. Desde la posicion de elemento y desde el padre del mismo.

const primerEnlace = document.querySelector("a");
// primerEnlace.remove(); // Metodo para eliminarlo por si mismo con .Remove
console.log(primerEnlace);

// Elimiar desde el padre

const navegacion = document.querySelector(".navegacion");
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]); // Con .removechild se para la referencia para eleminar el nodo
