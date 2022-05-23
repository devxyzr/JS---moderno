//Parametros y argumetos en funciones

const sumar2 = function (a, b) {
  // a y b son parametros
  console.log(a + b);
};

sumar2(2, 3); // 2 y 3 son argumentos

function saludar(nombre, apellido) {
  //Son los parametros que se le pueden pasar a la funcion no son los valores reales son varibles y su valor puede cambiar.
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("juan", "De la torre");
