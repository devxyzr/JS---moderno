const paises = [];

const nuevoPais = (pais) =>
  new Promise((Resolve) => {
    setTimeout(() => {
      paises.push(pais);
      Resolve(`Agregando: ${pais}`);
    }, 3000);
  });

nuevoPais("alemania").then((resultado) => {
  console.log(resultado);
  console.log(paises);
  return nuevoPais("Francia");
});
.then((resultado) => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais("Inglaterra");
  });
  .then((resultado) => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais("Holanda");
  });
    