// Proyecto de local Storge. -> Escribir teetws
// Variables

const fomulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

// Envent liseners

eventListeners(); // Activamos la funcion de event listeners

function eventListeners() {
  // Cuando el usuario agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);
  // Cuandoel documento esta listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];

    crearHTML();
  });
}

//Funciones

function agregarTweet(e) {
  e.preventDefault();

  // Text area -> donde el usuario escribe

  const tweet = document.querySelector("#tweet").value;
  console.log(tweet);

  // Validacion...

  if (tweet === "") {
    mostrarError("Un tweet no puede ir vacio.");
    return; // Evita que se ejecutes mas lineas de codigo
  }

  const tweetObj = {
    id: Date.now(),
    tweet,
  };

  // Añadir al arreglo de tweets

  tweets = [...tweets, tweetObj];
  // Una vez agregando vamos a crear el HTML

  crearHTML();

  // Reiniciar el formulario

  formulario.reset();

  // Mostrar mensaje de error
}

function mostrarError(error) {
  const mensajeError = document.createElement("p"); // Creando elemeto HTML
  mensajeError.textContent = error; // Agregando mensaje de error
  mensajeError.classList.add("error"); //Pasandole estilos

  // Insertando en el contenido

  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  // Elimina la alerta despues de 3seg.
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

// Muestra un listado de los tweets

function crearHTML() {
  limpiarHTLM();
  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      // Agregar un boton de elminar
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.innerText = "X";
      // Añadir la funcion de eliminar
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
        console.log("borrando");
      };

      // Crear el HTML
      const li = document.createElement("li");
      // añadir el texto
      li.innerText = tweet.tweet;

      // Asignar el boton
      li.appendChild(btnEliminar);
      // insertarlo en el html
      listaTweets.appendChild(li);
    });
  }

  sincronizarStorage();
}

// Agregar los tweets actuales al local storage
function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(id) {
  console.log(id);
  tweets = tweets.filter((tweet) => {
    return tweet.id !== id;
  });

  console.log(tweets);

  crearHTML();
}

// Limpiar el HTML

function limpiarHTLM() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
