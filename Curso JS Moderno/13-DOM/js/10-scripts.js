// Generar HTLM desde JS

// Crear un nuevo enlace

const enlace = document.createElement("a"); //.createElements

// Agregando el texto
enlace.textContent = "Nuevo enlace";
// Agreganod href
enlace.href = "/nuevo-enlace";
// Agregando un target
enlace.target = "_blank";

enlace.setAttribute("data-enlace", "nuevo-enlace"); // Atrubutos para la etiqueta a

enlace.classList.add("alguna-calse"); // Agregando una clase

enlace.onclick = miFuncion; // Se le agrega una funcion cuando el elemento se ha creado

console.log(enlace);

// Una vez definido el elemtos lo ideal es mostrarlo
// Selecccionar la navegacion

const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(enlace); // Se agrega en enlace creado dentro de la pantalla con . AppendChild

const navegacion2 = document.querySelector(".navegacion");
console.log(navegacion2); // Muestra los elementos diponibles
navegacion.insertBefore(enlace, navegacion2.children[1]); // Agregando enlace en la pocision deseada .inserBefore -> recibe dos parametros el HTLM insertado y la pocisicion en donde se va insertar dentro de la posicion!

function miFuncion() {
  //Funcion que se activa con el .onclick
  alert("Diste click");
}

// -------------------------------------------------------------------------------

// creando un card desde JS

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto"); // Agrega estilos ya definidos en el documento de CSS

const parrafo2 = document.createElement("p");
parrafo1.textContent = "Concierto de Rock";
parrafo1.classList.add("titulo");

const parrafo3 = document.createElement("p");
parrafo1.textContent = "$800 por persona";
parrafo1.classList.add("precio");

// Crear div con la clase de info

const info = document.createElement("div");
parrafo1.textContent = "info";
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen

const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";
imagen.classList.add("img-fluid");
imagen.alt = " Texto alternativo";

// Cread el card
const card = document.createElement("div");
card.classList.add("card");

// Asignar imagen

card.appendChild(imagen);

// Asignar info

card.appendChild(info);

// Insertar en el HTML

const contenedor = document.querySelector(".hacer .contedor-cards");
contenedor.insertBefore(card, contenedor.children[0]);

console.log(imagen);
