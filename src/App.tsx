import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

function App() {

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] align-middle justify-between">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  )
}

export default App
