(function () {
  let DB;
  const formulario = document.querySelector("#formulario");

  // Cunado se carge el documento se conecte a la base de datos

  document.addEventListener("DOMContentLoaded", () => {
    conectarDB();
    formulario.addEventListener("submit", validarCliente);
  });

  function validarCliente(e) {
    e.preventDefault();

    // Leer todos los inputs

    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    if (nombre === "" || email === " " || telefono === " " || empresa === " ") {
      imprimirAlerta("Todos los campos son obligatorios", "error");

      return;
    }
    // Valadicacion de datos para mandar a la base de datos
    // Crear un objeto con la informacion

    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
    };

    cliente.id = Date.now();

    CrearNuevoCliente(cliente);
  }

  function CrearNuevoCliente(cliente) {
    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");

    objectStore.add(cliente);

    transaction.onerror = function () {
      imprimirAlerta("Hubo un error", "error");
    };

    transaction.oncomplete = function () {
      console.log("Cliente Agregado");

      imprimirAlerta("El cliente se agrego correctamente");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 300);
    };
  }
})();
