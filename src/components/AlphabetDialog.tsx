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
				<div className="grid grid-cols-2 gap-4 max-h-[40vh] overflow-y-scroll sm:grid-cols-3">
						<label className="flex gap-2">
							<ImageTile letter={"A"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">A</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"B"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">B</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"C"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">C</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"D"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">D</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"E"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">E</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"F"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">F</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"G"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">G</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"H"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">H</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"I"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">I</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"J"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">J</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"K"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">K</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"L"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">L</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"M"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">M</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"N"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">N</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"O"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">O</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"P"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">P</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"Q"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">Q</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"R"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">R</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"S"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">S</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"T"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">T</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"U"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">U</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"V"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">V</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"W"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">W</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"X"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">X</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"Y"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">Y</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"Z"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">Z</span>
						</label>
						<label className="flex gap-2">
							<ImageTile letter={"Ç"} className=" flex-1 max-w-[initial] aspect-[7/8]" />
							<span className="inline-flex justify-center items-center rounded-md flex-1 text-3xl font-bold bg-correct text-correct-foreground">Ç</span>
						</label>
				</div>
			</DialogContent>
		</Dialog>
	)

}
