const producto = "Monitor 20 pulgadas";

// .repeat va a permitir repetir una cadena de texto

const texto = " en Promocion".repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// .split va a permitir dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

// Dividiendo string a partie de una coma

const hobbies =
  "Leer, caminar, musica, ecribir a mi pelo, aprender a programar";
console.log(hobbies.split(","));

// Como twitter divide los hashtags

const twitter =
  " Aprendiendo a programar con un curso que no me confunde tanto #queremosLuka";

console.log(twitter.split("#"));
