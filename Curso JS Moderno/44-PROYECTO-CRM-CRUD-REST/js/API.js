//Rest API
// Verbos que soporta Json-Server
//GET -> Obtener resgistros
//POST-> Enviar registros
//PUT-> Actualizar
//PATCH-> Actulizar
//DELETE-> Eliminar

// Siempre se debe utilizar el methodo de posts

const url = "http://localhost:4000/clientes";

// Cuando se creaun nuevo cliente, obtiene todo los clientes

export const nuevoCliente = async (cliente) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    }); // Fetch obtiene verbos del servidor
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

export const obtenerClientes = async () => {
  try {
    const resultado = await fetch(url);
    const clientes = await resultado.json();
    return clientes;
  } catch (error) {
    console.log(error);
  }
};

// Elimina un cliente...

export const EliminarCliente = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

// Obtiene un cliente por su id
export const obtenerCliente = async (id) => {
  try {
    const resultado = await fetch(`${url}/${id}`);
    const cliente = await resultado.json();
    return cliente;
  } catch (error) {
    console.log(error);
  }
};

// Actualiza un registro

export const editarCliente = async (cliente) => {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};
