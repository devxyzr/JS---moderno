// Async Await en funcion expression

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
// En una funcion expresiva o anonima el Asycn va justo antes de los parametros de la funcion

const ejecutar = async () => {
  try {
    console.log(1 + 1);
    const respuesta = await descargandoCLientes();
    console.log(2 + 2);
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};

ejecutar();

// Funcion expresion

const ejecutar2 = () => {};
