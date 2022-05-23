// Switch case -> se utiliza cuanto tenemos multiples condiciones que evaluar.
// () -> Dentro del parentesis va revisar el valor que queremos comprobar.
// Lee las condiciones por algo llamdo cases
// (metodoPago) Va a revisar la condicion dentro del parametro, si se le easiga determinado valor va a relizar una accion en especifico.
// Una vez ejecutado el programa se tiene que poner break al final para deternerlo.
// default = siempre debe estar presente dentro del switch
// El switch tmabien puede contener funciones, no solamente un clg
// Con swicht es mas facil leer las condiciones.

const metodoPago = "tarjeta";

switch (metodoPago) {
  case "tarjeta":
    pagar();
    break;
  case "efectivo":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case "cheque":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case "bareta":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  default:
    console.log("Un no has seleccionado un metodo de pago");
    break;
}

function pagar() {
  console.log("Pagando....");
}
