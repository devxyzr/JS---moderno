// Como pasarle parametros a una arrow funcion

const aprendiendo = function (tecnologia, tecnologia2) {
  // Parametro
  console.log("Aprendiendo " + tecnologia + " y " + tecnologia2);
};
aprendiendo("JS", "NodeJS"); //Argumento

// En los arrow function donde se pasan los argumentos en dentro del ()
// Si la funcon es de un sola linea, se le puede quitar los parenteis al argumento

const aprendiendo2 = (tecnologia, tecnologia2) =>
  "Aprendiendo " + tecnologia + tecnologia2;
console.log(aprendiendo2("JS", "Node.js"));
