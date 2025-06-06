import { cn } from "@/lib/utils"

type tileProps = {
	letter: string
	corret?: boolean
	contains?: boolean
	wrong?: boolean
	className?: string
}

export const Tile = ({ letter, corret, contains, wrong, className }: tileProps) => {
	return (
		<span
			className={cn(
				`flex justify-center items-center border-4 flex-1 max-w-28 aspect-[7/8] rounded-md text-2xl font-extrabold border-primary text-primary sm:text-3xl md:text-4xl`,
				corret && "border-correct bg-correct text-correct-foreground",
				contains && !corret && "border-mispositioned bg-mispositioned text-mispositioned-foreground",
				wrong && "border-incorrect bg-incorrect text-incorrect-foreground",
				className
			)}
		>
			{letter}
		</span>
	)
}
