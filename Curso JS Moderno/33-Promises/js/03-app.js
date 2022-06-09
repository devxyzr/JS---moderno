// Promises
// Palabra reservada de los promises
// Resolve -> Cuando el promise se ejecuta correctametne
// Reject -> Cuando exsite un error dentro del promise

// El promises se usa un sintaxis llamdo .then (y entonces )

const aplicarDescuento = new Promise((Resolve, Reject) => {
  const descuento = true;

  if (descuento) {
    Resolve("descuento aplicado");
  } else {
    Reject("No se puedo aplicar descuento");
  }
});

// Si el promise fue correcto -> ( ENTONCES )Que vamos a hacer.

aplicarDescuento.then((resultado) => {
  descuento(resultado);
});

// Atrapa el error del Reject y lo tratra

aplicarDescuento.catch((error) => {
  console.log(error);
});

// Tres valores posibles para los promises
// fulfilled - El promise  se cumplio
//rejected - El promise no se cumplio
// Pending - No se ha cumplido y tampoco ha sido rechazado

function descuento(mensaje) {
  console.log(mensaje);
}
