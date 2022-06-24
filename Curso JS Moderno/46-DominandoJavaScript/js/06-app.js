// Event loop o Loop de enventos, JS es de un solo hilo. Cada vez que se ejecuta la primera se va llamando la siguente

// Orden de ejecucion --------------------

console.log("primero"); //1

setTimeout(() => {
  //5
  console.log("Segundo");
}, 0);

console.log("Tercero"); // 2

setTimeout(() => {
  // 6
  console.log("cuarto");
}, 0);

new Promise(function (resolve) {
  //4
  resolve("Desconocido....");
}).then(console.log);

console.log("Ultimo"); // 3

function hola() {
  console.log("hola");
}

hola();
