import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"
import { Link } from "react-router-dom"

export const AboutUs = () => {
	return (
		<div>
			<div className="py-4">
				<Button
					variant={"ghost"}
					className="text-lg"
					asChild
				>
					<Link to="/">
						<ArrowLeftIcon className=" size-6 " />
						Voltar
					</Link>
				</Button>
			</div>
			<div className=" flex flex-col h-full justify-center">
				<div className="flex flex-col gap-4 my-12 rounded-lg p-4 bg-accent">
					<div className="flex flex-col gap-2">
						<h1 className="self-center text-4xl text-primary font-extrabold">SOBRE NÓS</h1>
						<hr className="w-full border-primary border-1" />
					</div>
					<p className="w-full self-center text-justify text-1xl">
						Website desenvolvido por <strong className="text-primary">Leonardo Luz</strong>, <strong className="text-primary">Diego Prestes</strong>, <strong className="text-primary">Gustavo Policarpo</strong> & <strong className="text-primary">Gustavo Martins</strong> durante o curso de Análise e Desenvolvimento de Sistemas no <em>Instituo Federal do Rio Grande do Sul - campus Osório</em>
					</p>
					<p className="w-full self-center text-justify text-1xl">
						Este projeto é um jogo interativo desenvolvido como parte da disciplina de Libras, com o objetivo de auxiliar no aprendizado do alfabeto manual da Língua Brasileira de Sinais (Libras).
					</p>
					<hr className="w-full border-primary border-1" />
					<p className="w-full self-center text-justify text-1xl">
						Inspirado no popular jogo <a
							href="https://term.ooo"
							target="_blank"
							className="text-blue-700 font-bold underline-offset-3 underline"
						>term.ooo</a>.
					</p>
				</div>
			</div>
		</div>
	)
}
