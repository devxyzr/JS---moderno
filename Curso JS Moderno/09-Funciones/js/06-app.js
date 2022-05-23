// Parametros por dafault

// Muchas veces las funciones no tiene los parametros necesarios para que la funcion se ejecute.
//Si no tiene el valor de apellido toma por defecto el valo que se la asigna a apellido.
// Colocar valores undefined para que tenga sentido lo que estamos haciendo.

function saludar(nombre = "amigo", apellido = "No tiene apellido") {
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Juan");
