import usePacientes from "../../../backend/hooks/usePacientes";
import Paciente from "./Paciente";

function ListadoPacientes() {
  const { pacientes } = usePacientes();

  return (
    <>
      {pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => {
            return <Paciente key={paciente._id} paciente={paciente} />;
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center"> No hay pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">
              y aparareceran en este lugar
            </span>
          </p>
        </>
      )}
    </>
  );
}

export default ListadoPacientes;
