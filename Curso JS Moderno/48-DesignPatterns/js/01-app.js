// Desing patterns

// Son soluciones tipicas a problemas comunes en Desarrollo de Sofware, cada patron es como un plano que se puede personalizar para resolver un problema de diseño en el codigo

// Beneficios

// Son soluciones a problemas de diseño de codigo
// Son soluciones probadas
// Son soluciones conocidas por todos y evitan la forma de escribir codigo "como cada quien entiende"

// Categoria de patrones de diseño

// De creacion - permiten crear objetos y permiten la reutilizacion del codigo.

// Estructura - explican como deben comunicarser los objetos y classes en grandes proyectos

//------------------------------------------------------------------------

// Class pattern -> para la creacion de objetos

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

const persona = new Persona("Juan", "correo@correo.com");
console.log(persona);
