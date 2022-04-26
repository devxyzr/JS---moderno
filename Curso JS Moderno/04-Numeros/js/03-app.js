// El objeto math -> un objeto de js donde encontraremos contidad de operaciones matematicas, se encuentra en el ventana global de JS.

Math;

let resultado;

// PI

resultado = Math.PI;

// Redondear un numero

resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.6);
resultado = Math.round(2.5);

// Redondear hacia arriba .ceil

resultado = Math.ceil(2.1);

// Redondear hacia abajo .floor

resultado = Math.floor(2.9);

// Raiz cuadrada .sqrt

resultado = Math.sqrt(144);

// Valor absoluto .abs deja simplemente el valor del numero si esta en negativo pasa a positivo.

resultado = Math.abs(-500);

// Potencia de un numero

resultado = Math.pow(2, 4);

// Minimo, se escoge el numero minimo dentro de un conjuto de numeros

resultado = Math.min(2, 5, 6, 8, 9, 10, 12, 14, 1);

// Maximo, se accede al maximo valor entre un conjuto de numeros.

resultado = Math.max(2, 5, 6, 8, 9, 10, 12, 14, 1);

// Aelatorio -> se escoge un numero aleatorio .random va arrojar numero que no son enteros.

resultado = Math.random();

//Aelatorio dentro de un rango...

resultado = Math.floor(Math.random() * 30);

console.log(resultado);
