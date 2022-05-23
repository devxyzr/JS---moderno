// Cambiar el CSS de un elemento.

const encabezado = document.querySelector("h1");
// console.log(encabezado.style); // Se tiene acceso a la propiedades del encabezado, mas especificamente a las propiedades de Style CSS.

encabezado.style.backgroundColor = "red";
encabezado.style.fontFamily = "Arial";
encabezado.style.textTransform = "Uppercase";

// Los estilos en JS cambiar respecto a CSS

// CSS -> Justify-Content  ---- JS -> justifyContent

const card = document.querySelector(".card");
card.classList.add("nuevaClaseDesdeJS"); // Se añade una clase al HTML desde JS
card.classList.remove("card");
console.log(card.classList);
