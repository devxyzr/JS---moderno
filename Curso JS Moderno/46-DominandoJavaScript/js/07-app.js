// Self -> Se refiere en a la ventana global

self.onload = () => {
  console.log("Ventana Lista");
};

const producto = {
  nombre: "Monitor 20 pulgadas ",
  precio: 30,
  disponible: true,
  mostrarInfo: function () {
    const self = this;

    return `El prodcuto ${self.nombre} tiene un precio de ${self.precio} `;
  },
};

console.log(producto.mostrarInfo());
