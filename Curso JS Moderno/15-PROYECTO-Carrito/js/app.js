// Variables que se van usar en el proyecto
// Buena practica poner las variables en la parte superior

const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaCursos = document.querySelector("#lista-cursos");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

cargarEventsListeners();

function cargarEventsListeners() {
  // Cuando agregas un curso presionado "Agregar al Carrito "
  listaCursos.addEventListener("click", agregarCurso);

  // Elimina cursos del carrito
  carrito.addEventListener("click", eliminarCurso);

  // Vaciar el carrito

  vaciarCarritoBtn.addEventListener("click", () => {
    articulosCarrito = []; // Reseteamos el arreglo

    limpiarHTML(); // Eliminamos todo
  });
}
// ------------------------------ COMENTS ---------------------
// e.target.classList.contains("agregar-carrito") -> Seleccionando la clase correpondiente dentro del HTML
// e.preventDefault(); -> No deja que se ejecute la accion del link externo.

// Funciones

// Dispara una funcion cuando se da Cliclk en el boton agregar curso

function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);

    // Iterar sobre el carrito y mostrar su HTML
  }
}

// Elimina un curso del carrito

function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");
    // Elimina del arrreglo del articuloCarrito por le data-id
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);

    carritoHTML();
  }
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso.

function leerDatosCurso(curso) {
  // Crear un objeto con el contenido del curso actual

  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  // Revisa si un elementoo ya existe en el carrito

  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    // Actualizamos la cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; // retorna el objeto actulizado
      } else {
        return curso; // retorna los objetos que no son duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    // Agregamos el curso al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  // articulosCarrito = [...articulosCarrito, infoCurso];

  carritoHTML();
}

// Agregando elementos al arreglo de articulosCarrito

// Muestra en el carrito de compras en el HTML

function carritoHTML() {
  //Limpiar el HTML

  limpiarHTML();

  // Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    console.log(curso);
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
    <img src="${imagen}">
    </td>
    <td>
    ${titulo}
    </td>
    <td>
    ${precio}
    </td>
    <td>
    ${cantidad}
    </td>
    <td>
    <a href="#" class="borrar-curso" data-id=${id}> X </a>
    </td>
    `;

    // Agrega el HTML del carrito en el tbody.

    contenedorCarrito.appendChild(row);
  });
}

// Elimina los cursos del tbody

function limpiarHTML() {
  // Forma lenta de eliminar HTML
  // contenedorCarrito.innerHTML = " ";
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
