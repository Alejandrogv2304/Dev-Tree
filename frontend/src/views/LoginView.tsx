import { Link } from "react-router-dom"
export default function LoginView() {
  return (
    <>
   <h1 className="text-4xl text-white font-bold">Iniciar Sesión</h1>

    <nav>
       <Link 
       to="/auth/register"
       className="text-center text-white text-lg block"
       >
       ¿No tienes cuenta? Registrate
       </Link>
    </nav>
    </>
  )
}
