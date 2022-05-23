// Eventos sobre los imputs -> Entras del teclado

const busqueda = document.querySelector(".busqueda");

// Se ejecuta cuando se preciona una tecla

busqueda.addEventListener("keydown", () => {
  console.log("escribiendo...");
});

// Se ejecuta cuando presionas y se suelta la tecla

busqueda.addEventListener("keyup", () => {
  console.log("Soltaste la tecla");
});

// Se ejecuta cuando entras y sales del imput

busqueda.addEventListener("blur", () => {
  console.log("Entraste y saliste del imput");
});

// Se ejecuta cuando copiamos algo dentro del imput

busqueda.addEventListener("copy", () => {
  console.log("Copiaste");
});

//Se ejecuta cuando pegamos algo dentro del imput

busqueda.addEventListener("paste", () => {
  console.log("Pegaste algo");
});

// Se ejecuta cuando cortas algo con Crtl + X

busqueda.addEventListener("cut", () => {
  console.log("Cortaste algo");
});

// Se ejecuta cuando se reliza algunos de los enventos de arriba, basicamete cualquier entrada del teclado. (No lee la accion del Blur)

// busqueda.addEventListener("input", () => {
//   console.log("Hiciste un imput");
// });

// ------------------------------------------------------------------------ //

busqueda.addEventListener("input", (e) => {
  console.log(e.target.value); // Para saber lo que usuario esta escribiendo.
});

busqueda.addEventListener("input", (e) => {
  if (e.target.value === "") {
    console.log("falto la validacion");
  } // Para saber lo que usuario esta escribiendo.
});
