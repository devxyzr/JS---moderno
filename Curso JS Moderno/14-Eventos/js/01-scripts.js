// Eventos -> Cuando visitamos los sitios una app web, esta lleno de enventos.  Cada accion tien un evento detras.
//Enventos que sucenden en la WEB,("EvensLiseners")
// .addEventListener -> Se va comportar como una funcion anonima, su comportamiento puede variar dependiendo de Event llamado entre parentesis.
// DOMContentLoaded -> envento que es descargado una vez se ejecuta el HTML
// Event -> cuando algo sucede dentro de la paguina WEB se ejecuta un codigo.

console.log(1);

document.addEventListener("DOMContentLoaded", () => {
  console.log(2);
});

console.log(3);
