// Fechas en JS - El objeto date()
// Las fechas en JS residen en un objeto llamdo Date
// El orden de la fecha es date(mes-dia-año)

// Get en fechas = sirve para extraer el valor
// Set en fechas siver

const diaHoy = new Date(); // La fecha se va a guardar como un objeto.
// Dentro del objeto de Date() Se puede modificar las fechas.
let valor;

valor = diaHoy;

valor = diaHoy.getFullYear(); // Para traer el año actual.
valor = diaHoy.getMonth(); // Trae el mes actual, enero va ser = [0];
valor = diaHoy.getMinutes(); // Trae los minutos actual de la hora actual.
valor = diaHoy.getHours(); //Trae la hora actual
valor = diaHoy.getTime(); // Los mili segundos que han transcurrido desde 1970 hasta la fecha.
valor = diaHoy.setFullYear(2020); // Pone el año actual, imprime el año correspondiente.
console.log(valor);

Date.now(); //Marca la fecha en milisegundos,
