// Funciones en objetos y acceder a sus valores

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto:${this.nombre} tiene un  precio de: ${this.precio}`
    );
  },
};

// En este objeto la funcion estba buscando los valores de nombre y de precio fuera del objeto
// Cuando del string tamplate ${this.} ponemos el .this hacemos referencioa a las variables que estan contenidas dentrp del mismo objeto

producto.mostrarInfo();
