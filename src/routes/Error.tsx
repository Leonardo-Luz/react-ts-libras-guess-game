import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"
import { Link } from "react-router-dom"

export const Error = () => {
	return (
		<div className="flex flex-col h-screen align-middle justify-center">
			<div className="self-center flex flex-col w-[60%]">
				<div className="flex flex-col gap-4 my-12 rounded-lg p-4 h-[60%] bg-accent">
					<div className="flex flex-col gap-2">
						<h1 className="self-center text-4xl text-primary font-extrabold">Página não encontrada!</h1>
						<hr className="w-full border-primary border-2" />
					</div>
					<Button
						size="sm"
						variant="link"
						className="flex flex-row align-middle self-start"
						asChild
					>
						<Link to='/' className="flex flex-row align-middle gap-2"><ArrowLeftIcon className="h-6" />Voltar para a página inicial</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}
