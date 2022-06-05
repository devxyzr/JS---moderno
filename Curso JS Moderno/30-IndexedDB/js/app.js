// Index DB en JavaScript
// Base de datos en el navegador
// API -> Aplication Programing Interface
// API en JS para almacenar grandes cantidades de datos estructurados.
// A diferencia de LocalStorage puede alamacenar strings, boleeans, incluso archivos, cualquier tipo de dato soportado por JavaScript
// No tiene "Limites" conocidos aunque los archivos de mas de 50mb va a preguntar por permisos.
// Soportada en todas las ultimas versiones de los navegadores.

// Index DB -> Es diferente a LocalStorage
// Local Storage es una buena solucion para almacenar poca onformacion (como un carrito de combras abandonado o un JSON Web Token)
// IndexDB es una Base de datos completa, pero los dato siguen siendo visibles para cualquiera por lo que no es remondable alamacenar passwords o tarjetas de credito.

// Pasos para crear una base de datosss

let DB;

document.addEventListener("DOMContentLoaded", () => {
  crmDB();
  setTimeout(() => {
    crearCliente();
  }, 5000);
});

function crmDB() {
  // Crear base de datos version 1.0
  let crmDB = window.indexedDB.open("crm", 1);

  // Si hay un error

  crmDB.onerror = function () {
    console.log("Error en la creacion en la base de datos");
  };

  //Si se creo bien

  crmDB.onsuccess = function () {
    console.log("Base de datos creada");

    DB = crmDB.result;
  };

  //Configuracion de la base de datos
  //Este metodo se ejecuta una sola vez, cuando se crea la base de datos y ejecuta un evento.

  crmDB.onupgradeneeded = function (e) {
    const db = e.target.result;

    // El Object store es el que nos va a permitir crear la base de datos
    const objectStore = db.createObjectStore("crm", {
      keyPath: "crm",
      autoIncrement: true,
    });
    // Definir las columnas [i] - KeyPhatd
    objectStore.createIndex("nombre", "nombre", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });

    console.log("Base de datos creada ");
  };
}

// Transacciones en BD -> Cuando se completan correctamente los pasos

function crearCliente() {
  let transaccion = DB.transaction(["crm"], "readwrite");

  transaccion.oncomplete = function () {
    console.log("Transaccion completadda");
  };

  transaccion.onerror = function () {
    console.log("Error en la transaccion ");
  };

  const objectStore = transaccion.objectStore("crm");
  const nuevoCliente = {
    telefono: 654321,
    nombre: "Rafa",
    email: "correo@entiendo.com",
  };

  const peticion = objectStore.add(nuevoCliente);
  console.log("peticion");
}
