import React, { Fragment } from "react";

const Header = ({ titulo, cantidad }) => {
  //----------------------------------

  // Si esxiste el return dendro de la funcion este espacio antes de return se puede utilizar para inyectar JS puro

  //---------------------------------
  return (
    <Fragment>
      <h1> {titulo}</h1>
    </Fragment>
  );
};

// Se puede escribir de manera implicitael codigo, pero no se le podria inyectar condigo JavaScript dentro de la funcion

// const Header2 = ({ titulo }) => {
//   <h1>{titulo} </h1>;
// };

export default Header;
