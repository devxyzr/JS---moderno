// Ejecutar pantalla completa con JS

const abrirBtn = document.querySelector("#abrir-pantalla-completa");
const SalirBtn = document.querySelector("#salir-pantalla-completa");

abrirBtn.addEventListener("click", pantallaCompleta);
abrirBtn.addEventListener("click", cerrarPantallaCompleta);

function pantallaCompleta() {
  document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta() {
  document.exitFullscreen();
}
