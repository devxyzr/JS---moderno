//Destructuring de objetos anidados

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacion: {
      pais: "china",
    },
  },
};

const { nombre } = producto;

console.log(nombre); // Extrae el valor del nombre del produto.

const {
  informacion: {
    fabricacion: { pais },
  },
} = producto; // Para sacar las propiedad den un objeto dentro de un objeto se debe llamar a al objeto padre seguido de (: {}) con la propiedad que querramos car del objeto.

// Objeto dentro de objeto, recursividad para llegar al objeto.

console.log(pais);
