// Seleccionar elementos del HTML por su ID = Un ID solo se puede nombrar un vez por documento, los id son unico.

// Si hay dos ID que comparten el mismo nombre el metodo va a traer el primero que encuentre.

const formulario = document.getElementById("formulario");
console.log(formulario);

const noExiste = document.getElementById("no-existe");
console.log(noExiste); // Retorna un null a diferencia de getByClassName
