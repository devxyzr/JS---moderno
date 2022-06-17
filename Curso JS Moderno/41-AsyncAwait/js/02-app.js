// Async Await

function descargandoCLientes() {
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (!error) {
        resolve("El listado de Clientes se descargo correctamente");
      } else {
        reject("Error en la conexion");
      }
    }, 3000);
  });
}

// Async await -> En vez que le .then se debe utulizar o se debe guardar el valor dentro de un variable

// Async -> En la funcion padre que en la que se ejecuta el promise
// Await -> Detiene la ejecucion de codigo hasta que se resuelva el promise

// Cuando hay un error se da directamente hacia el catch

// !!! La funcion debe tener una funcion padre y una funcion hijo.

async function ejecutar() {
  try {
    console.log(1 + 1);
    const respuesta = await descargandoCLientes();
    console.log(2 + 2);
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
}

ejecutar();
