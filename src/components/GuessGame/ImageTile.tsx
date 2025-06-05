import { cn } from "@/lib/utils"

type ImageTileProps = {
	letter: string
	className?: string
}

export default function ImageTile({ letter, className }: ImageTileProps){

	return (
		<div className={cn(
			"rounded-md flex-1 max-w-28 aspect-[7/8] bg-muted overflow-hidden", className
		)}>
			<img  src={`/${letter.toUpperCase()}.png`} alt={`Imagem da letra ${letter} em libras`} className="w-full h-full object-fill" />
		</div>
	)

}