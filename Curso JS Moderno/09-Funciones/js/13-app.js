//Convertir a arrow funcion el reprodcutor de musica

const reprodutor = {
  cancion: "",
  reproducir: (id) => console.log("Reproduciendo cancion..." + id),
  pausar: () => console.log("Pausando"),
  borrar: (id) => console.log("Borrando cancion..." + id),
  crearPlaylist: (nombre) => console.log("Creando una playlist " + nombre),
  reproducirPlaylits: (nombre) =>
    console.log("Reproducir la playlist " + nombre),

  // set es la manera de agregar valores

  set nuevacacion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },

  // get es la manera de obtner de nuevo esos valores
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

//Metodos de propiedad

reprodutor.nuevacacion = "Sad man";
reprodutor.obtenerCancion;
reprodutor.reproducir(30); // Sintaxis de punto porque estamo trabajando con un objeto.
reprodutor.reproducir(20);
reprodutor.pausar();
reprodutor.borrar(30);
reprodutor.crearPlaylist("mana");
reprodutor.reproducirPlaylits("Sexandcity");
