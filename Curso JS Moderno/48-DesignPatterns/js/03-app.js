// Singleton -> no permite que se instacien multiples objetos con la misma clase

// Solo se puede isntnaciar una vez el objeto

let instacia = null;

class Persona {
  constructor(nombre, email) {
    if (!instacia) {
      this.nombre = nombre;
      this.email = email;
      instacia = this;
    } else {
      return instacia;
    }
  }
}

const persona = new Persona("Juan", "correo@ccorreo.com");
console.log(persona); // Instancia 1

const persona2 = new Persona("Karen", "karen@karen.com");
console.log(persona2); // Instancia 2
