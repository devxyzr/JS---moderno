// Reto del Fizz Buzz

// Multiplos de 3 = Fizz
// Multiplos de 5 = Buzz
// Multiplos de 3 and 5 = FizzBuzz

// La condicion menos comun es la que debe ir arriba de nuestro codigo.

for (let i = 1; i < 100; i++) {
  if (i % 15 === 0) {
    console.log(`${i} FIZZ BUZZ`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  }
}
