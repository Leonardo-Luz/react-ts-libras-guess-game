import { Outlet } from "react-router-dom"
import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { Toaster } from "./components/ui/sonner"
import { useEffect } from "react"

function App() {

		useEffect(() => {
			const theme = localStorage.getItem("theme")
			console.log(theme)
			if(theme === "dark") document.body.classList.add("dark")
		}, [])
	
  return (
    <div className="flex flex-col justify-between h-screen px-2">
      <Header />
			<div className=" flex-1 mx-auto container max-w-(--breakpoint-xl)">
      	<Outlet />
			</div>
      <Footer />
			<Toaster />
    </div>
  )
}

export default App
