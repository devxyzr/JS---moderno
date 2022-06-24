// Funcional JS ->
// Crear tu codigo creando funciones
// Las funciones con regla genrela deberas tomar una entrada y una salida
// No se permite la modificacion de los datos
// Tiene una sintaxis orientada a la matematica

// Inmutabilidad - Los datos no deben modificarse (Ultilizar cosnt casi siempre)
// Separar funciones de datos
// First class Funtion

//-------------------------------------
// Inmutablidad -> Un dato no puede cambiarse, no se puede tener ->>>

let cliente = "Juan";
cliente = "Pedro ";
//------------------------------------

// Separar funciones de datos
// Se utilizan mucho las funciones que retornan un nuevo dato o array Methods, de esa forma tentremos funciones que entragna un resultados nuevo pero nunca modifican datos
//-----------------------------------
// Firsta class Funtiones ->>>>
// Es poder crear funciones que parezcan cualquier variable como lo es funcion expresion

const suma = function (a, b) {
  return a + b;
};

const resultado = suma;
// -----------------------------------

// --------------------------------------------------------------------------

// Asignar una funcion como si fuese un valor: como un numero, un string o un entero

const suma2 = function (a, b) {
  return a + b;
};

const resultado2 = suma2;
