// Explicit  Binding

function persona(el1, el2) {
  console.log(`Mi nombres es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
  nombre: "Juan",
};

const musicaFavorita = ["Heavy Metal", "Rock"];

// Dentro del puntos call estamos pasandole de forma explicita los valores a las funcion

// En call se tiene que pasar cada elemento de forma idividual
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

// Con apply se puede pasar un arreglo completo
persona.apply(informacion, musicaFavorita);

// .bind funciona ifual que call, pero se tiene que pasar debtro de una funcion
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
