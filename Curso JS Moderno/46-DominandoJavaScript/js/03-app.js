// Implicit binding -> Va a decir de forma clara donde se va a encontrar el valor con la palabras this

const usuario = {
  nombre: "Juan",
  edad: 20,
  informacion() {
    console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
  },
  mascota: {
    nombre: "Hook",
    edad: 1,
    informacion() {
      console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    },
  },
};

// Nos estamos refieriendo de forma explicita donde va a encontrar los datos

usuario.informacion();
usuario.mascota.informacion();
