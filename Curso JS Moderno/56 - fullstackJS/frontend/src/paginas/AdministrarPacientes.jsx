import Formulario from "../components/Formulario";
import ListadoPacientes from "../components/ListadoPacientes";

export const AdministrarPacientes = () => {
  return;
  <div className="flex">
    <div className="md:w-1/2">
      <Formulario />
    </div>
    <div className="md:w-1/2">
      <ListadoPacientes />
    </div>
  </div>;
};

export default AdministrarPacientes;
