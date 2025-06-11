import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { HelpCircleIcon, SunMoonIcon, BookIcon } from "lucide-react"
import AboutDialog from "../AboutDialog"
import AlphabetDialog from "@/components/AlphabetDialog"

export const Header = () => {
	return (
		<header className="py-3">
			<div className="flex justify-between items-center gap-2 mx-auto container max-w-(--breakpoint-xl)">
				<div className=" flex justify-start flex-1 align-middle">
					<img src="/icon.png" className="h-9 dark:invert" />
					<Button
						size="sm"
						variant="link"
						className="px-2 text-center text-nowrap text-3xl font-bold text-foreground"
						asChild
					>
						<Link to='/'>Alfabeto Manual</Link>
					</Button>
				</div>
				<div className=" flex justify-end items-center gap-1 flex-1">
					<AlphabetDialog>
						<Button
							size="icon"
							variant="ghost"
						>
							<BookIcon className="size-5" />
						</Button>
					</AlphabetDialog>
					<Button
						size="icon"
						variant="ghost"
						onClick={() => {
							document.body.classList.toggle("dark")
							const withDarkTheme = document.body.classList.contains("dark")
							localStorage.setItem("theme", withDarkTheme ? "dark" : "light")
						}}
					>
						<SunMoonIcon className="size-5" />
					</Button>
					<AboutDialog>
						<Button
							size="icon"
							variant="ghost"
						>
							<HelpCircleIcon className="size-5" />
						</Button>
					</AboutDialog>
				</div>
			</div>
		</header>
	)
}

