import { HtmlHTMLAttributes } from "react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

type KeyboardKeyProps = {} & HtmlHTMLAttributes<HTMLButtonElement>

export default function KeyboardKey({className, children, ...rest }: KeyboardKeyProps){

	return (
		<Button
			variant="outline"
			className={cn(
				"!p-0 h-12 text-xl sm:text-2xl",
				className
			)}
			{...rest}
		>
			{children}
		</Button>
	)

}