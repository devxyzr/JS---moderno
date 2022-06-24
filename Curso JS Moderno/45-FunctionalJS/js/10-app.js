// Composition -> Es una alternativa a las clases. Es basicametne escribir muchas funciones y utilizar dentro de los objetos las que creamos utilizar

// Se define una funcion fuera del objeto

const obtenerNombre = (info) => ({
  mostrarNombre() {
    console.log(`Nombre: ${info.nombre}`);
  },
});

const guardarEmail = (info) => ({
  agregarEmail(email) {
    console.log(`Guardando email ${info.nombre}`);
    info.email = email;
  },
});

const obtenerEmail = (info) => ({
  mostrarEmail() {
    console.log(`Correo: ${info.email}`);
  },
});

const obtenerEmpresa = (info) => ({
  mostrarEmpresa() {
    console.log(`Empresa ${info.empresa}`);
  },
});

const obtenerPuesto = (info) => ({
  mostrarEmpresa() {
    console.log(`Empresa ${info.puesto}`);
  },
});

function Cliente(nombre, email, empresa) {
  let info = {
    nombre,
    email,
    empresa,
  };

  // Con Objet.assig se pasa hacia el objeto la funcion definida afuera

  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info),
    obtenerEmpresa(info)
  );
}

function Empleado(nombre, email, puesto) {
  let info = {
    nombre,
    email,
    puesto,
  };
  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info),
    obtenerPuesto(info)
  );
}

const cliente = Cliente("Juan", null, "Codigo con Juan");
// La funciones se puede re utilizar

cliente.mostrarNombre();
cliente.agregarEmail("cliente@cliente.com");
cliente.mostrarEmail("cliente@cliente.com");
cliente.mostrarEmpresa();

const empleado = Empleado("Pedro", null, "Programador");
empleado.mostrarNombre();
empleado.mostrarEmail("empleado@empleado.com");
