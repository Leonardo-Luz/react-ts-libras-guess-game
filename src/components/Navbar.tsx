import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="flex flex-row p-3 bg-amber-500 align-middle justify-around">
      <Link to='/' className="w-[25%] text-left font-bold text-white"><img src="vite.svg" alt="ifrs logo" /></Link>
      <Link to='/' className="w-[25%] text-center font-bold text-white">LIBRAS</Link>
      <Link to='/about-us' className="w-[25%] text-right font-bold text-white">Sobre Nós</Link>
    </div>
  )
}

