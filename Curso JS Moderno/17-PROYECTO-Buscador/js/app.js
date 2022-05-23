// Bucador de automoviles

// Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
// Contenedor para los resultados
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear(); // Toma de manera automatica el año actual
const min = max - 10;

// Generar un objeto con la busqueda

const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

// Eventos

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos); // Muestra los carrros al cargar

  // LLenas las opciones de años
  llenarSelect();
});

// Event listener para los fomulario de busqueda

marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;

  filtrarAuto();
});

year.addEventListener("change", (e) => {
  datosBusqueda.year = parseInt(e.target.value);
  filtrarAuto();
});

minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
  filtrarAuto();
});

maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
  filtrarAuto();
});

puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = parseInt(e.target.value);
  filtrarAuto();
});

transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
  filtrarAuto();
});

color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  filtrarAuto();

  console.log(datosBusqueda);
});
// Funciones

// Mostrar todos los autos que existen en db.JS apenas termine de cagar el HTML
// Crea un parrafo para cada carro
function mostrarAutos(autos) {
  limpiarHTML(); // Elimina el HTML previo

  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `
    
    ${marca}
    ${modelo}
    - ${year}
    - ${puertas} Puertas -
    Transmisión: ${transmision}
    - Precio: ${precio}
    - Color: ${color}
    `;

    // Insertar el resultado en el HTML

    resultado.appendChild(autoHTML);
  });
}

// Limpiar HTML

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

// Genera los años del select

function llenarSelect() {
  for (let i = max; i >= min; i--) {
    // Muestra los carros desde el año actual hacia 10 años atras.
    const opcion = document.createElement("option"); // Los select tienen la etiqueta opcion
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); // Agrega las opciones de año al Select
  }
}

// Funcion que filtra en base a las buqueda

// Filtrado por marca
function filtrarAuto() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filterYear)
    .filter(filterMinimo)
    .filter(filterMaximo)
    .filter(filterPuertas)
    .filter(filterTransmision) // Funcion de alto nivel
    .filter(filterColor);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
    {
    }
  }
}

function noResultado() {
  limpiarHTML();

  const noResultado = document.createElement("div");
  noResultado.classList.add("alerta", "error");
  noResultado.textContent =
    "No hay resultado, intenta con otros terminos de busqueda";
  resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}

function filterYear(auto) {
  const { year } = datosBusqueda;
  if (year) {
    return auto.year === year;
  }
  return auto;
}

function filterMinimo(auto) {
  const { minimo } = datosBusqueda;
  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}

function filterMaximo(auto) {
  const { maximo } = datosBusqueda;
  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}

function filterPuertas(auto) {
  const { puertas } = datosBusqueda;
  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}

function filterTransmision(auto) {
  const { transmision } = datosBusqueda;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}

function filterColor(auto) {
  const { color } = datosBusqueda;
  if (color) {
    return auto.color === color;
  }
  return auto;
}
