// Partials y Corting

// Currygin -> Es dividar una funcion que toma mas de un parametro em argumetos de forma parcial

const suma = (a, b, c) => a + b + c;

const parcial = (a) => (b, c) => suma(a, b, c);

const primerNumero = parcial(5);
const resultado = primerNumero(4, 5);

console.log(resultado);

const parciail = (a) => (b) => (c) => suma(a, b, c);

const primerNumero = parcial(5);
const segundoNumero = primerNumero(4);
const resultado = segundoNumero(3);

console.log(resultado
    );
    
console resultadoPacial = parcial(5)(4)(3)