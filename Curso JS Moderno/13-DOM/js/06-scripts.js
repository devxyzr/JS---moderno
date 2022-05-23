// Modificar texto o img en JS

// Se le puede aplicar el encadenamiento ->

const encabezado = (document.querySelector(".contenido-hero h1").textContent =
  " New tittle"); // Modificando el texto desde JS

// Tambien se puede asignar una varible y asignarsela a query selector.

console.log(encabezado);

// Forma de acceder al texto de HTLM por JS

console.log(encabezado.innerText); // .innerText -> Texto interno. No va encontar un texto que este oculto con la propiedad de CSS de visibility:hidden
console.log(encabezado.textContent); // .textContent -> Texto contenido.
console.log(encabezado.innerHTML); // .innerHTML Se trae el HTML

// Seleccionar imagen

const imagen = document.querySelector(".card img");
imagen.src = "img/hacer2.jpg"; // Se puede acceder a todas la propiedades de la imagen como si fueran un objeto con las sintaxis de punto.
