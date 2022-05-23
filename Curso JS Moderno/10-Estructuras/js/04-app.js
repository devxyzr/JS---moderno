// Mayor o igual y else if

// Else if -> Cuando tenemos que revisar si se cumple mas de una condicion
// Se revisa la primera condicion, despues va por la segunda, podria ir por una tercera condicion o las que se planteen y si no queda ninguna de las ateriores iria por el else.
// En el else if simpre se va ejecutar la primera condicion que se cumpla.

const dinero = 10;
const totalApagar = 500;
const tarjeta = true;
const cheque = true;

if (dinero >= totalApagar) {
  console.log("Si podemos pagar");
} else if (tarjeta) {
  console.log("Si puedo pagar porque tengo la tarjeta");
} else if (cheque) {
  console.log("Si puedo pargar con cheque");
} else {
  console.log("Fondos insuficientes");
}
