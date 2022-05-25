// MomentJS -> Permite mas versatilidad a la hora de manejar las fechas dentro de JS

//Para trabaja fechas dentro de JS es mucho mejor siempre estar trabajando con una libreria, es este caso MomentJS

const diaHoy = new Date();

moment.locale("es");

console.log(moment().format("LLLL", diaHoy));

console.log(moment(), add(3, "days").calendar());
