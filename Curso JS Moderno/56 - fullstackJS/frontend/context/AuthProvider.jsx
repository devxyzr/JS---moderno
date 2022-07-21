import { useState, useEffect, createContext } from "react";
import clientesAxios from "../src/config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      console.log(token);

      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clientesAxios("/veterinarios/perfil", config);

        setAuth(data);
      } catch (error) {
        console.log(error.response.data.msg);
        setAuth({});
      }
    };
    autenticarUsuario();
  });

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
