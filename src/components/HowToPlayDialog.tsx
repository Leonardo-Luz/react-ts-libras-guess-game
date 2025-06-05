import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import ImageTile from "@/components/GuessGame/ImageTile"
type HowToPlayDialogProps = {
	children: React.ReactNode
}

export default function HowToPlayDialog({ children }: HowToPlayDialogProps){

	return (
		<Dialog>
			<DialogTrigger asChild>
				{children}
			</DialogTrigger>
			<DialogContent className=" !max-w-(--breakpoint-md)">	
				<DialogHeader>
					<DialogTitle className=" text-xl">Como jogar?</DialogTitle>
				</DialogHeader>
				<div className=" flex flex-col gap-4">
					<p className="mb-2">Tente adivinhar a palavra em até 3 tentativas. A cada tentativa serão destacadas quais letras a palavra possui e quais estão na posição correta.</p>
					<p>Exemplo:</p>
					<div className="flex flex-col gap-2 pl-4 pb-4">
						<div className=" flex flex-col gap-1">
							<div className=" flex gap-1">
								<ImageTile letter={"B"} className=" max-w-14"/>
								<ImageTile letter={"R"} className=" max-w-14"/>
								<ImageTile letter={"A"} className=" max-w-14"/>
								<ImageTile letter={"S"} className=" max-w-14"/>
								<ImageTile letter={"A"} className=" max-w-14"/>
								<ImageTile letter={"S"} className=" max-w-14"/>
							</div>
							<div className=" flex gap-1">
								<span className=" inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-incorrect text-incorrect-foreground">L</span>
								<span className=" inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-incorrect text-incorrect-foreground">I</span>
								<span className=" inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-incorrect text-incorrect-foreground">B</span>
								<span className=" inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-mispositioned text-mispositioned-foreground">R</span>
								<span className=" inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">A</span>
								<span className=" inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">S</span>
							</div>
						</div>
						<p className="mt-2">Letras que a palavra contém e que estão na posição correta:</p>
						<div className=" flex gap-1">
							<span className=" inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">A</span>
							<span className=" inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">S</span>
						</div>
						<p className="mt-2">Letras que a palavra contém, mas que estão na posição errada:</p>
						<div className=" flex gap-1">
								<span className=" inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-mispositioned text-mispositioned-foreground">R</span>
						</div>
						<p className="mt-2">Letras que a palavra não contém:</p>
						<div className=" flex gap-1">
							<span className=" inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-incorrect text-incorrect-foreground">L</span>
							<span className=" inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-incorrect text-incorrect-foreground">I</span>
							<span className=" inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-incorrect text-incorrect-foreground">B</span>					
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)

}