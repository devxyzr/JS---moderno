import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
    <h1> Administrar pacientes de veterianaria </h1>
    
    <Outlet/>

   
    
    </>
  )
}

export default AuthLayout