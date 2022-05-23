// Prevenir Event bubbling con Delagation

const cardDiv = document.querySelector(".card");

cardDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("titulo")) {
    console.log("Diste click en titulo");
  } // De esta forma identificamos a que cosa le estamos dando click, .ClassList -> Nos va a cercir la clases de lo emento que estamos dando click

  if (e.target.classList.contains("precio")) {
    console.log("Diste click en precio");
  }
  if (e.target.classList.contains("card")) {
    console.log("Diste click en card");
  }
});
