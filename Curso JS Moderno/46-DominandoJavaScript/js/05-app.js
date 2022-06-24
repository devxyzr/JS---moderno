// New binding

function Auto(modelo, color) {
  this.modelo = modelo; // New binding -> Es el que nos va permitir accerder a los valores del nuevo objeto creado
  this.color = color;
}

const auto = new Auto("Camaro", "Negro");
console.log(auto);

// Window binding

window.color = "negro"; // Se le esta asignando una variable a la ventana global
function hola() {
  console.log(color);
}

hola();
