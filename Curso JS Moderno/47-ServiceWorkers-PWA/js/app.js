// Forma en la que se registra un service workers
// Solo se ejecuta una vez

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((registrado) => console.log("Se instalo correctamente", registrado))
    .catch((error) => console.log("Fallo la instalacion", error));
} else {
  console.log("Service Workers no soportables");
}
