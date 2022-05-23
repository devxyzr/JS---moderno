// Como se comunican las funciones

iniciarApp(); // Una funcion que arranca todo el programa.

// Se puede llmar a un a segunda funcion dentro de la primera funcion y se ejecutra despues de que la primera haya acabado.

function iniciarApp() {
  console.log("Iniciando App...");
  segundaFuncion(); // Lamado segunda funcion -> Encadenamiento
}

function segundaFuncion() {
  console.log("Desde la segunda función");
  usuarioAutenticado("Pablo"); // Encadenamiento tercera funcion
}

function usuarioAutenticado(usuario) {
  console.log("Autenticando ususario..... espere");
  console.log("Usuario autenticado exitosamente " + usuario);
}
