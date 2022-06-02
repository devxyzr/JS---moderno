// Funcion IIFE que se ejecuta de una vez, permite que el scope del la funcion no salga del bloque
// Se debe agregar parentesis

(function () {
  console.log("Desde un IIFE");

  window.nombreCliente = "juan"; // Asignamos la varible a la ventana globla
})();

export const nombreCliente2 = "Juan"; // Exportar la variable para que sea visible en otros archivos, no solo puede ser varibles... tmabien hace referrencia a funciones, archivos, clases, objetos. Cualquier tipo de dato

export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
  return `Cliente ${nombre} - Ahorro ${ahorro}`;
}

// Exportando una funcion

export function tieneSaldo(ahorro) {
  if (ahorro > 0) {
    console.log("Si tiene saldo");
  } else {
    console.log("El Cliente no tiene saldo");
  }
}

// Exportantando una clase

export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }
  mostrarInformacion() {
    return `Cliente ${this.nombre} - Ahorro ${this.ahorro}`;
  }
}

export default function nuevaFuncion() {
  console.log("Este es el export default");
}
