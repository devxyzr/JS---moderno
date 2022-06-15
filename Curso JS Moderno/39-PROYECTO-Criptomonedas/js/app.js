const criptopmonedasSelect = document.querySelector("#criptomonedas");
const monedasSelect = document.querySelector("#moneda");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

const objBusqueda = {
  moneda: "",
  criptomoneda: "",
};

// Crear un Prosmise
const obtenerCriptomonedas = (criptomonedas) =>
  new Promise((resolve) => {
    resolve(criptomonedas);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultarCriptomonedas();

  formulario, addEventListener("submit", submitFormulario);

  criptopmonedasSelect.addEventListener("change", leerValor);
  monedasSelect.addEventListener("change", leerValor);
});

function consultarCriptomonedas() {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limist=10&tsym=USD `;

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => obtenerCriptomonedas(resultado.Data))
    .then((criptomonedas) => selectCriptomonedas(criptomonedas));
}

function selectCriptomonedas(criptomonedas) {
  criptomonedas.forEach((cripto) => {
    const { FullName, Name } = cripto.CoinInfo;

    const option = document.createElement("option");
    option.value = Name;
    option.textContent = FullName;
    criptopmonedasSelect.appendChild(option);
  });
}

function leerValor(e) {
  objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
  e.preventDefault();

  // Validar

  const { moneda, criptomoneda } = objBusqueda;
  if (moneda === "" || criptomoneda === "") {
    mostrarAlerta("Ambos campos son obligatorio");
    return;
  }

  // Consultar la API con los resultados

  consultarAPI();
}

function mostrarAlerta(msg) {
  const existeError = document.querySelector(".error");

  if (!existeError) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("error");

    // mensaje de error

    divMensaje.textContent = msg;

    formulario.appendChild(divMensaje);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

function consultarAPI() {
  const { moneda, criptomoneda } = objBusqueda;

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda},`;

  mostrarSpinner();

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((contizacion) =>
      mostrarCotizacionHTML(contizacion.DISPLAY[criptomoneda][moneda])
    );
}

function mostrarCotizacionHTML(cotizacion) {
  LimpiarHTML();

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;
  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.innerHTML = `El Precio es: <span>${PRICE}</span>`;

  const precioAlto = document.createElement("p");
  precioAlto.innerHTML = `<p> Precio mas alto del dia: <span> ${HIGHDAY}    </span></p>`;

  const precioBajo = document.createElement("p");
  precioBajo.innerHTML = `<p> Precio mas bajo del dia: <span> ${LOWDAY}    </span></p>`;

  const ultimasHoras = document.createElement("p");
  ultimasHoras.innerHTML = `<p> Variacion ultimas 24 horas: <span> ${CHANGEPCT24HOUR}  %  </span></p>`;

  const ultimasActualizacion = document.createElement("p");
  ultimasActualizacion.innerHTML = `<p> Ultima Actualizacion: <span> ${LASTUPDATE}    </span></p>`;

  resultado.appendChild(precio);
  resultado.appendChild(precioAlto);
  resultado.appendChild(precioBajo);
  resultado.appendChild(ultimasHoras);
  resultado.appendChild(ultimasActualizacion);
}

function LimpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function mostrarSpinner() {
  LimpiarHTML();

  const spinner = document.createElement("div");
  spinner.classList.add("spinner");

  spinner.innerHTML = `
 
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>

  `;

  resultado.appendChild(spinner);
}
