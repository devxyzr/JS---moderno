// Detener la ejecucion de in if con una funcion.
// Dentro del else if puede que las dos condiciones se cumplan y muetre un mensaje que no querramos ver. El if funciona ejecuntando la condicion una vez.
// Return solo va a funcionar dentro de una funcion.

const autenticado = true;

if (autenticado) {
  console.log("el usuario esta atenticado ");
}

const puntaje = 500;

function revisarPuntaje() {
  if (puntaje > 300) {
    console.log("Buen puntaje... felicidades");
    return;
  }

  if (puntaje > 400) {
    console.log("Exelente");
    return;
  }
}

revisarPuntaje();
