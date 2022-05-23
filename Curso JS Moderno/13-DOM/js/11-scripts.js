// Construccion mas avanzada de un botton con un accion dentro de JS

const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", mostarOcultarFooter);

function mostarOcultarFooter() {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    this.btnFlotante.classList.remove("activo");
    this.textContent = "Idioma y Moneda";
  } else {
    footer.classList.add("activo");
    this.classList.add("activo");
    this.textContent = "X cerrar";
  }
}
