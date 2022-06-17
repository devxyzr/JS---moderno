// Como manejar multiples awaits

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando clientes...");

    setTimeout(() => {
      resolve("Los clientes fueron descargados");
    }, 5000);
  });
}

function descargarNuevosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando pedidos...");

    setTimeout(() => {
      resolve("Los pedidos fueron descargados");
    }, 3000);
  });
}

// Promise va a tomar un arreglos de diferentes promises que quieres ejecutar

const app = async () => {
  try {
    const respuesta = await Promise.all([
      descargarNuevosClientes(),
      descargarNuevosPedidos(),
    ]);
    console.log(respuesta);
    console.log(respuesta[0]);
    console.log(respuesta[1]);
  } catch (error) {
    console.log(error);
  }
};

app();
