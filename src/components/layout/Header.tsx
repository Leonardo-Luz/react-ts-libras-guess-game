import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { HelpCircleIcon, SettingsIcon } from "lucide-react"
import AboutDialog from "../AboutDialog"

export const Header = () => {
	return (
		<header className="py-3">
			<div className="flex justify-between items-center gap-2 mx-auto container max-w-(--breakpoint-xl)">
				<div className=" flex justify-start flex-1 align-middle">
					<img src="/icon.png" className="h-9" />
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
					<AboutDialog>
						<Button
							size="icon"
							variant="ghost"
						>
							<HelpCircleIcon className="size-5" />
						</Button>
					</AboutDialog>
					<Button
						size="icon"
						variant="ghost"
						disabled
					>
						<SettingsIcon className="size-5" />
					</Button>
				</div>
			</div>
		</header>
	)
}

