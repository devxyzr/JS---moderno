// Intersection Objserver -> Permite identificar cuando un elemeto esta visible
// No permite identificar un elemtento una vez que es visible en el viewport del navegador

//Solo crea al observador

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("Ya esta visible");
    }
  });
  observer.observe(document.querySelector(".premium"));
});
