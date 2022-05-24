// Local storage -> Pertenece a la ventana global de JS es decir Windows

localStorage.setItem("nombre", "valor", false); // La manera en como le agregamos un valor al dentro del local Storage.
sessionStorage.setItem("nombre", "Juan"); // Agrega valor al local storage dentro de la session.
// Se agrega con llave - valor:
// Llave: como se hace referencia a ellos
// Valor: Lo que puede cambiar de la llave.
// El local storage solo puede almacenar strings, NO almacena objetos ni arrays
// Lo datos que se agregan al local storage permanecen.

const producto = {
  nombre: "Monitor 24 Pulgadas",
  precio: 300,
};

// Metodo para convertir un objeto en un string

const productoString = JSON.stringify(producto);

localStorage.setItem("producto", productoString);

// Metodo convertir un arreglo en un string y agregarlo a local Storage

const meses = ["enero", "febrero", "marzo"];

const mesesString = JSON.stringify(meses);
localStorage.setItem("meses", mesesString);
