// Gasto semanal con clases

// Varibles y Selectores

const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

//Eventos

eventListener();
function eventListener() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
  formulario.addEventListener("submit", agregarGasto);
}
//Clases

class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }
  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    // Extrayendo el valor
    const { presupuesto, restante } = cantidad;

    // Agregar al HTML
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
  }

  imprimirAlerta(mensaje, tipo) {
    // Crear el div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");

    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }
    //Mensaje de error
    divMensaje.textContent = mensaje;

    //Insertar en el HTML

    document.querySelector(".primario").insertBefore(divMensaje, formulario);

    // quitar del HTML
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  agregarGastoListado(gastos) {
    this.limpiarHTML(); // Elimina el html previo

    // Iterar sobre los gastos
    gastos.forEach((gasto) => {
      const { cantidad, nombre, id } = gasto;
      // Crear un LI
      const nuevoGasto = document.createElement("li");
      nuevoGasto.className =
        "list-group-item d-flex justify-content-between algin-items-center";
      nuevoGasto.dataset.id = id;
      //Agregar el HTML del gasto

      nuevoGasto.innerHTML = `${nombre} <sapan class= "badge badge-primary badge-primary badge-pill"> ${cantidad} </span>`;

      // Boton para borrar el gasto
      const btnBorrar = document.createElement("button");
      btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
      btnBorrar.innerHTML = "Borrar &times";

      nuevoGasto.appendChild(btnBorrar);

      //Agregar al HTML

      gastoListado.appendChild(nuevoGasto);
    });
  }

  limpiarHTML() {
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }
}

// Instanciar

const ui = new UI();

let presupuesto;

//Funciones

function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("¿Cual es tu presupuesto?");

  // console.log(Number(presupuestoUsuario));

  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }

  presupuesto = new Presupuesto(presupuestoUsuario);
  console.log(presupuesto);

  ui.insertarPresupuesto(presupuesto);
}

// Añadir gastos a la clase?
500;
function agregarGasto(e) {
  e.preventDefault();

  // Leer los datos del formulario
  const nombre = document.querySelector("#gasto").value;
  const cantidad = Number(document.querySelector("#cantidad").value);

  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta("Cantidad no valida", "error");
    return;
  }

  // Generar un objeto con el gasto con mejoria del objeto literal

  const gasto = { nombre, cantidad, id: Date.now() };

  // presupuesto añade un gasto
  presupuesto.nuevoGasto(gasto);

  // Mensaje se agrego todo correctamente
  ui.imprimirAlerta("Gasto agregado Correctemente");

  // Imprimir los gastos
  const { gastos } = presupuesto;
  ui.agregarGastoListado(gastos);

  // Reinicia el formulario
  formulario.reset();
}
