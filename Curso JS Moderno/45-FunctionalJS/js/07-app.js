// Funciones que retornan funciones

const obtenerCliente = () => () => console.log("Rafael cuartas");

const fn = obtenerCliente();

fn();
