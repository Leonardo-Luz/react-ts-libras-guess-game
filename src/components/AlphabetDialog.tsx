import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import ImageTile from "@/components/GuessGame/ImageTile"
import { ReactNode } from "react"

type DictionaryDialogProps = {
	children: ReactNode
}

export default function AlphabetDialog({ children }: DictionaryDialogProps) {

	return (
		<Dialog>
			<DialogTrigger asChild>
				{children}
			</DialogTrigger>
			<DialogContent className="">
				<DialogHeader>
					<DialogTitle className=" text-xl">Alfabeto</DialogTitle>
				</DialogHeader>
				<p className="mb-2">Quando um símbolo inclui movimento, ele é indicado por setas que mostram a direção do gesto.</p>
				<div className=" flex flex-col gap-4 items-center justify-start max-h-[40vh] overflow-y-scroll">
					<div className="flex flex-row gap-8">
						<label className="flex flex-row gap-3">
							<ImageTile letter={"A"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">A</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"B"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">B</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"C"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">C</span>
						</label>
					</div>
					<div className="flex flex-row gap-8">
						<label className="flex flex-row gap-3">
							<ImageTile letter={"D"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">D</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"E"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">E</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"F"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">F</span>
						</label>
					</div>
					<div className="flex flex-row gap-8">
						<label className="flex flex-row gap-3">
							<ImageTile letter={"G"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">G</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"H"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">H</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"I"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">I</span>
						</label>
					</div>
					<div className="flex flex-row gap-8">
						<label className="flex flex-row gap-3">
							<ImageTile letter={"J"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">J</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"K"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">K</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"L"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">L</span>
						</label>
					</div>
					<div className="flex flex-row gap-8">
						<label className="flex flex-row gap-3">
							<ImageTile letter={"M"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">M</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"N"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">N</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"O"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">O</span>
						</label>
					</div>
					<div className="flex flex-row gap-8">
						<label className="flex flex-row gap-3">
							<ImageTile letter={"P"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">P</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"Q"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">Q</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"R"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">R</span>
						</label>
					</div>
					<div className="flex flex-row gap-8">
						<label className="flex flex-row gap-3">
							<ImageTile letter={"S"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">S</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"T"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">T</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"U"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">U</span>
						</label>
					</div>
					<div className="flex flex-row gap-8">
						<label className="flex flex-row gap-3">
							<ImageTile letter={"V"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">V</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"W"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">W</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"X"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">X</span>
						</label>
					</div>
					<div className="flex flex-row gap-8">
						<label className="flex flex-row gap-3">
							<ImageTile letter={"Y"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">Y</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"Z"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">Z</span>
						</label>
						<label className="flex flex-row gap-3">
							<ImageTile letter={"Ç"} className=" max-w-14" />
							<span className="inline-flex justify-center items-center rounded-md w-14 h-16 text-3xl font-bold bg-correct text-correct-foreground">Ç</span>
						</label>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)

}
