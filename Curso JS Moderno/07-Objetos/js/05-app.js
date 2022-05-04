// Objetos dentro de objetos.

// Un objeto puyede contener un objeto dentro de otro objeto.

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacio: {
      pais: "china",
    },
  },
};

console.log(producto);
console.log(producto.informacion.fabricacio.pais); //Utilizad sintaxis de puntos, podemos acceder a los objetos con esa sintaxis.
