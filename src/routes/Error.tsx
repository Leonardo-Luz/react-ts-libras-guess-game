import { Link } from "react-router-dom"

export const Error = () => {
  return (
    <div className="flex flex-row align-middle justify-center gap-4">
      <h1>Page not found!</h1>
      <Link to='/' >Voltar</Link>
    </div>
  )
}
