// Metodo permite resmplzar el texto de una cadena de strings

const producto = "Monitor de 20 Pulgadas";

console.log(producto);

// Remplaza una palabra por otra .replace

console.log(producto.replace("Pulgadas", "pene"));
console.log(producto.replace("Monitor", "Monitor Curvo "));

// Cortar o extraer parte de un cadena de texto .slice

console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1)); // Si el primer numero es mayor al segundo no va hacer nada.

// Alternativa a .slice >> .substring -> si le pasas un numero mayor es capaz de modificarlo.

console.log(producto.substring(0, 10));
console.log(prodcuto.substring(2, 1));

// Como google muestra solo la primera letra de usuario

const usuario = "Juan";
console.log(usuario.substring(0, 1));

// .charAt solo corta la letra que se le indique

console.log(usuario.charAt(0));
