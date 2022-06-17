// Utilizar async await para conectar un API

const url = "https://picsum.photos/list";

document.addEventListener("DOMContentLoaded", obtenerDatos);

// Trayendo datos de una API con async await

async function obtenerDatos() {
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}
