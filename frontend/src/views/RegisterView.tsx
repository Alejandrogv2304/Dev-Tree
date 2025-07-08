import { Link } from "react-router-dom"

export default function RegisterView() {
  return (
    <>
    <div>
      Vista Register
    </div>
   <nav>
       <Link to="/auth/login">
       ¿Ya tienes cuenta? Inicia Sesión
       </Link>
    </nav>
    </>
  )
}
