// Eventos que suceden con el MOUSE

const nav = document.querySelector(".navegacion");

// Registrar un evento

// Dandole click a la navegacion se activa el evento

nav.addEventListener(`click`, () => {
  console.log("click en nav");
});

// Si paso el cursor sobre la navegacion se activa el evento.

nav.addEventListener(`mouseenter`, () => {
  console.log("Me tocaste con el mause");
});

// Cuando el cursor sale de contenedor se activa el evento.

nav.addEventListener("mouseout", () => {
  console.log("Saliendo de la navegacion");
  nav.style.backgroundColor = "red";
});

// Cuando en cursor entra en el navegador se activa el evento.

nav.addEventListener("mouseenter", () => {
  console.log("Entrando en la navegacion");
  nav.style.backgroundColor = "blue";
});

mausedonw; // Similar a un click -> Ejecuta la accion
mauseup; // Cuando se suelta el click del mause -> Ejecuta la accion
bdclick; // Dobleclick -> Ejecuta la accion
