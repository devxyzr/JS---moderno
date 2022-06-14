const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");
const paginacionDiv = document.querySelector("#paginacion");

const resgistrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
  formulario.addEventListener("submit", validarFormulario);
};

function validarFormulario(e) {
  e.preventDefault();

  const terminoBusqueda = document.querySelector("#termino").value;

  if (terminoBusqueda === "") {
    mostrarAlerta("Agrega un termino de busqueda");
    return;
  }
  buscarImagenes(40);
}

function mostrarAlerta(mensaje) {
  const existeAlerta = document.querySelector(".bg-red-100");

  if (!existeAlerta) {
    const alerta = document.createElement("p");
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alerta.innerHTML = `<strong class="font-bold">Error!</strong>
  <span class="block sm:inline">${mensaje}</span>

  `;

    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function buscarImagenes(perPage = 100) {
  const termino = document.querySelector("#termino").value;

  const paginacion = perPage < 3 || perPage > 200 ? 20 : perPage;
  const key = "27980088-b82a2956ae1e125b95d1052a9";
  const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${paginacion}&page=${paginaActual}`;

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => {
      console.log(resultado);
      totalPaginas = calcularPaginas(resultado.totalHits);
      console.log(totalPaginas);
      mostrarImagenes(resultado.hits);
    });
}

// Generador que a registrar la cantidad de elementos de acuerdo a la paginas

function* crearPaginador(total) {
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

function calcularPaginas(total) {
  return parseInt(Math.ceil(total / resgistrosPorPagina));
}

function mostrarImagenes(imagenes) {
  console.log(imagenes);

  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
  // // Iterar sobre el arreglo de imagenes y cosntruir el HTML

  imagenes.forEach((imagen) => {
    const { previewURL, likes, views, largeImageURL } = imagen;

    resultado.innerHTML += `
  <div class="w-1/2 md:w-1/3 lg:w/4 p-3 mb-4">
    <div class="bg-white">
     <img class="w-full" src="${previewURL}">
     <div class = "p-4">
            <p class="font-bold"> ${likes} <span class="font-light"> Me Gusta </span> </p>
            <p class="font-bold"> ${views} <span class="font-light"> Veces vista </span> </p>

            <a
            class="block w-full bg-blue-800 hover: bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
            
            href="${largeImageURL}"  target="_blank" rel="noopener noreferrer">

              Ver Imagen 
            </a>
         </div>
      </div>
    </div>
    `;
  });
  // Limpiar el paginador previo

  while (paginacionDiv.firstElementChild) {
    paginacionDiv.removeChild(paginacionDiv.firstChild);
  }

  imprimirPaginador();
}

function imprimirPaginador() {
  iterador = crearPaginador(totalPaginas);

  while (true) {
    const { value, done } = iterador.next();
    if (done) return;

    // Caso contrario, genera un boton por cada elemento

    const boton = document.createElement("a");
    boton.href = "#";
    boton.dataset.pagina = value;
    boton.textContent = value;
    boton.classList.add(
      "siguiente",
      "bg-yellow-400",
      "px-4",
      "py-1",
      "mr-2",
      "font-bold",
      "mb-4",
      "upercase",
      "rounded",
      "mx-auto",
      "justify-center"
    );

    boton.onclick = () => {
      paginaActual = value;

      buscarImagenes();
    };

    paginacionDiv.appendChild(boton);
  }
}
