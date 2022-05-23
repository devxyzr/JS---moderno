// El operador ternario -> otra forma con la cual trabajar condicones en JS
// ? hace como la primera parte del if
// : hace las veces de else
const autenticado = true;
const puedePagar = false;

console.log(
  autenticado && puedePagar
    ? puedePagar
      ? "Si esta autenticado y puede pagar"
      : "No autenticado, no puede pagar"
    : "No no esta autenticado"
);
