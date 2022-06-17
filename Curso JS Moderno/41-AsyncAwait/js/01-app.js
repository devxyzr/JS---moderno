// Que es un try catch ->

// En JS cuando un codigo falla deja de ejecutarse
// Ejecutar un pieza de codigo y si no se puede se obtiene una ecepcion como un mensaje de error mienstras sigue ejecutando el codigo

console.log(1 + 1);

// Administrar errores ejemplos en que utilizarlos:
// - Conectar una base de datos
// - Consultar un API
// - Autenticar un ususario
// - Acciones en caso de que fallen, siga funcionando la aplicacion

try {
  autenticarUsuario();
} catch (error) {
  console.log("No se pudo ejecutar error");
}
console.log(2 + 2);
