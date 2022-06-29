// Name spaces -> ayuda a evitar conlicion con nombre en el scope global, crear un objeto global al rededor de la aplicacion

const restaurantApp = {};

restaurantApp.platillos = [
  {
    platillo: "Pizza",
    precio: 25,
  },
  {
    platillo: "Hamburgesa",
    precio: 20,
  },
  {
    platillo: "HotDog ",
    precio: 20,
  },
];

restaurantApp.funciones = {
  mostrarMenu: (platillos) => {
    console.log("Bienvenidos a nuestro Menu");
    platillos.forEach((platillo, index) => {
      console.log(`${index}: ${platillo.platillo} $${platillo.precio}`);
    });
  },
  ordenar: (id) => {
    console.log(
      `Tu platillo: ${restaurantApp.platillos[id].platillo} se esta preparando`
    );
  },

  agregarPlatillo: (platillo, precio) => {
    const nuevo = {
      platillo,
      precio,
    };
    restaurantApp.platillos.push(nuevo);
  },
};

restaurantApp.funciones.ordenar(1);
restaurantApp.funciones.agregarPlatillo("Taco", 20);
restaurantApp.funciones.mostrarMenu(platillo);
const { platillos } = restaurantApp;
