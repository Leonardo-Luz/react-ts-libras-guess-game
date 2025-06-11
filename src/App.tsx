import { Outlet } from "react-router-dom"
import { Header } from "./components/layout/Header"
import { Toaster } from "./components/ui/sonner"
import { useEffect } from "react"

function App() {

		useEffect(() => {
			const theme = localStorage.getItem("theme")
			console.log(theme)
			if(theme === "dark") document.body.classList.add("dark")
		}, [])
	
  return (
    <div className="flex flex-col justify-between h-svh px-2">
      <Header />
			<div className=" flex-1 mx-auto container max-w-(--breakpoint-xl)">
      	<Outlet />
			</div>
			<Toaster />
    </div>
  )
}

export default App
