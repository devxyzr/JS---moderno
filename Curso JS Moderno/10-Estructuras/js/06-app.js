// Operador && para que se cumplan dos o mas condiciones.
// el operaodr && revisa que se cumplas dos condicones dentro del if.
// Si ninguna de esas condiciones se cumple atomaticamente van a caer en el else.
// Con el signo de exclamacion al incio podemos negar una condicion
// El orden de como se ejecuta los if influye en el resultado.

const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
  console.log("Puedes comprar");
} else if (!usuario && !puedePagar) {
  console.log("No puedes comprar");
} else if (!usuario) {
  // Si no es usuario
  console.log("Inicia sesion o saca una cuenta");
} else if (!puedePagar) {
  console.log("Fondos insuficientes");
}
