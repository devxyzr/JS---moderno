// Añadir funciones a un objeto

// Cuando hay una funcion dentro de un objeto lo conocemos como metodos de propiedad
// Igual que en los objetos se puede asignar un valor por feura del objeto con las sintaxis de punto.

const reprodutor = {
  reproducir: function (id) {
    console.log("Reproduciendo cancion..." + id);
  },
  pausar: function () {
    console.log("Pausando");
  },
  borrar: function (id) {
    console.log("Borrando cancion..." + id);
  },
  crearPlaylist: function (nombre) {
    console.log("Creando una playlist " + nombre);
  },
  reproducirPlaylits: function (nombre) {
    console.log("Reproducir la playlist " + nombre);
  },
};

reprodutor.reproducir(30); // Sintaxis de punto porque estamo trabajando con un objeto.
reprodutor.reproducir(20);
reprodutor.pausar();
reprodutor.borrar(30);
reprodutor.crearPlaylist("mana");
reprodutor.reproducirPlaylits("Sexandcity");
