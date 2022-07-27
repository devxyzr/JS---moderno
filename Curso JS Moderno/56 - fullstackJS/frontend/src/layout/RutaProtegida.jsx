import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../../backend/hooks/useAuth";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return "cargando... ";

  return (
    <>
      <Header />

      {auth._id ? (
        <main className="constainer mx-auto mt-10">
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )}
      <Footer />
    </>
  );
};

export default RutaProtegida;
