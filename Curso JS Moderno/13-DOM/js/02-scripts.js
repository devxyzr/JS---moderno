// Seleccionar elementos por su clase..
// Se iniciliza una varible con nombre del elemento que queremos seleccionar dentro del HTML

const header = document.getElementsByClassName("header"); //Get elements nos deja selecionar elementos por su clase.
console.log(header);

const hero = document.getElementsByClassName("hero");
console.log(hero);

// Si las clases existe mas de una vez dentro del documento se pueden agrupar dentro de una sola variable

const contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores); // Agrupa todas las clases que tinen la palabra contendor

// Si una clase no existe no va retornar como un error, se va a retornar como un arreglo vacio.

const noExiste = document.getElementsByClassName("no-existe");
console.log(noExiste);
