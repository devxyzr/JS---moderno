// Eventos que suceden con el scroll del mouse.
// Estos evento se van a dar en el marco de la ventana global... (WINDOWS)
// Se puede implementar una funcion,

// Imprime en pantalla los pixeles que se recorren con el scroll de manera vertical -> buena forma para ir mirando si estamos yendo hacia arriba o abajo

window.addEventListener("scroll", () => {
  const scrollPX = window.scrollY;
  console.log(scrollPX);
});

window.addEventListener("scroll", () => {
  const premium = document.querySelector(".premium");
  const ubicacion = premium.getBoundingClientRect(); // Nos dice a que distancia en pixeles se va ejecutar

  if (ubicacion.top < 100) {
    console.log("El elemento ya esta visible");
  } else {
    console.log("Aun no");
  }
});
