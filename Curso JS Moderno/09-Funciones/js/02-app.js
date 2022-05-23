// Diferencias entre una funcion declarativa y exprresiva
// JS funciona en dos vueltas, la primera es la etapa de creacion donde el codigo empieza a leerse y regriata las funciones que existan. La segunda vuelta es la etapa de ejecucion. -> Hositing en JS.

//Function Declaration
// Este codigo si va a funcionar
sumar();

function sumar() {
  console.log(2 + 2);
}

// Expressive Function
// Este no va a funcionar
sumar2();

const sumar2 = function () {
  console.log(3 + 3);
};
