import { Link } from "react-router-dom"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"

type AboutDialogProps = {
	children: React.ReactNode
}

export default function AboutDialog({ children } : AboutDialogProps){

	return (
		<Dialog>
			<DialogTrigger asChild>
				{children}
			</DialogTrigger>
			<DialogContent className=" !max-w-(--breakpoint-sm)">
				<DialogHeader>
					<DialogTitle className=" text-xl">Sobre</DialogTitle>
				</DialogHeader>
				<div className="flex flex-col gap-4">
					<p>Website desenvolvido por <strong className="text-primary">Leonardo Luz</strong>, <strong className="text-primary">Diego Prestes</strong>, <strong className="text-primary">Gustavo Policarpo</strong> & <strong className="text-primary">Gustavo Martins</strong> durante o curso de Análise e Desenvolvimento de Sistemas no <em>Instituo Federal do Rio Grande do Sul - campus Osório.</em></p>
					<p>Este projeto é um jogo interativo desenvolvido como parte da disciplina de Libras, com o objetivo de auxiliar no aprendizado do alfabeto manual da Língua Brasileira de Sinais (Libras).</p>
					<DialogClose asChild>
						<Button size="sm" variant="link" className="p-0 w-fit text-base font-normal text-foreground underline hover:no-underline" asChild>
							<Link to="/about-us">Ler mais a respeito</Link>
						</Button>
					</DialogClose>
					<hr />
					<p className="inline-flex items-center">
						Inspirado no popular jogo 
						<Button
							size="sm" 
							variant="link" 
							className="ml-1 p-0 w-fit text-base font-normal underline hover:no-underline" 
							asChild
						>
							<a
								href="https://term.ooo"
								target="_blank"
							>
								term.ooo
							</a>
						</Button>
						.
				</p>
				</div>
			</DialogContent>
		</Dialog>
	)

}
