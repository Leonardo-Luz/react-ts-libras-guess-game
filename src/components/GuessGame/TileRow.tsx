import { cn } from "@/lib/utils"

type TileRowProps = {
	className?: string
	children?: React.ReactNode
}

export default function TileRow({ className, children }: TileRowProps){

	return (
		<div 
			className={cn(
				"flex justify-center gap-1 w-full md:gap-2 lg:gap-3",
				className
			)}
		>
			{children}
		</div>
	)

}