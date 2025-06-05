import { Button } from "./ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"

type LossDialogProps = {
	words: string[]
	open: boolean,
	onOpenChange: (open: boolean) => void
}

export default function LossDialog({ words, open, onOpenChange }: LossDialogProps){

	const message = words.length == 0 
		? ""
		: words.length == 1
			?	`A palavra correta era ${words[0]}.`
			: `As palavras corretas eram ${words.join(", ")}.`

	return (
		<Dialog
			open={open}
			onOpenChange={onOpenChange}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-xl">Derrota</DialogTitle>
				</DialogHeader>
				<p>Infelizmente você perdeu. {message}</p>
				<DialogFooter>
					<DialogClose asChild>
						<Button>Tentar novamente</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)

}