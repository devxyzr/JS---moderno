// Eliminar un objetos del local storage

localStorage.removeItem("nombre"); // Con le metodo remove Item podemos eliminar elementos del Local Storage

// Actualizar un registro dentro del local storage

const mesesArray = JSON.parse(localStorage.getItem("meses")); // Convirtiendo un string a array

console.log(mesesArray);

mesesArray.push("Nuevo mes"); // Agregandole un nuevo item al array

localStorage.setItem("meses", JSON.stringify(mesesArray)); // Sobre escribimos de nuevo el array

localStorage.clear(); // Todo lo que existan dentro del local storage lo va a eliminar.
