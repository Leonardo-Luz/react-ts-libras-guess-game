import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="flex flex-row p-3 bg-amber-500 align-middle justify-around">
      <div className="min-w-[25%] flex align-middle justify-start"><Link to='/' className="self-center text-left font-bold text-white"><img src="vite.svg" alt="ifrs logo" /></Link></div>
      <div className="min-w-[25%] flex align-middle justify-center"><Link to='/' className="self-center text-center font-bold text-white">LIBRAS</Link></div>
      <div className="min-w-[25%] flex align-middle justify-end"><Link to='/about-us' className="self-center text-right font-bold text-white">Sobre Nós</Link></div>
    </div>
  )
}

