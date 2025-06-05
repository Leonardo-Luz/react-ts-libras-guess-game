import { useEffect, useRef, useState } from "react"
import { Tile } from "@/components/GuessGame/Tile";
import words from "../assets/words.json"
import HowToPlayDialog from "@/components/HowToPlayDialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import LossDialog from "@/components/LossDialog";
import TileSkeleton from "@/components/GuessGame/TileSkeleton";
import TileRow from "@/components/GuessGame/TileRow";
import ImageTile from "@/components/GuessGame/ImageTile";
import { DeleteIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const Home = () => {
	const QTY_TRIES = 3;

	const [word, setWord] = useState<string>("");
	const [target, setTarget] = useState<string>("SALVE");
	const [tries, setTries] = useState<string[]>([]);
	const [win, setWin] = useState<boolean>(false);
	const [streak, setStreak] = useState<number>(0);
	const [highscore, setHighscore] = useState<number>(0);
	const inputRef = useRef<HTMLDivElement>(null);

	const [showLossDialog, setShowLossDialog] = useState<boolean>(false)

	const TypeHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
		const key = event.key

		if (win || tries.length == QTY_TRIES) return
		if (key == "Backspace" && word.length > 0) setWord(prev => prev.slice(0, prev.length - 1))
		else if (key == "Enter" && word.length == target.length && tries.length < QTY_TRIES) {
			setWord("")
			
			setTries(prev => {
				return [...prev, word]
			})
			
			if (word == target) {
				toast.success(`Você acertou! A palavra era ${target}.`)
				setTimeout(() => {
					ContinueHandler()
				}, 1000) 
				return 
			}

			if(tries.length + 1 === QTY_TRIES) {
				setTimeout(() => setShowLossDialog(true), 0)
			}
		}

		else if (/^[A-Za-zÇç]$/.test(key) && word.length < target.length) {
			setWord(prev => prev + key.toUpperCase())
		}
	}

	function reset() {
		setWord("");
		const index = Math.floor(Math.random() * words.length)
		setTarget(words[index])
		setTries([]);
		setWin(false);
	}

	function ContinueHandler(): void {
		reset()
		const index = Math.floor(Math.random() * words.length)
		setTarget(words[index])
		setStreak(prev => { return prev += 1 })
	}

	function ExitHandler(): void {
		reset()
		setStreak(0)
	}

	useEffect(() => {
		const index = Math.floor(Math.random() * words.length)
		setTarget(words[index])
	}, [])

	useEffect(() => {
		inputRef?.current?.focus();
	}, [target])

	useEffect(() => {
		if (streak > highscore)
			setHighscore(streak)
	}, [streak])

	return (
		<div
			ref={inputRef}
			onKeyDown={TypeHandler} tabIndex={0}
			className="flex flex-col align-top justify-top w-full h-full gap-4 outline-0 "
		>
			<div className="flex justify-between items-center py-4 w-full">
				<HowToPlayDialog>
					<Button size="lg" variant="ghost" className="px-2">
						<span className="inline-flex justify-center items-center rounded-full size-5.5 text-base font-bold bg-primary text-primary-foreground">i</span>
						Como jogar?
					</Button>
				</HowToPlayDialog>
				<div className="flex flex-row justify-between p-4 gap-4">
					<p>Highscore: {highscore}</p>
					<p>Streak: {streak}</p>
				</div>
			</div>
			<div className=" flex flex-col items-center gap-2 w-full h-full">
				{target && (
					<>
						<TileRow>
							{target.split("").map((letter, index) => (
								<ImageTile key={index} letter={letter} />
							))}
						</TileRow>
						{
							tries.map(triedWord => {
								return <TileRow>
									{
										triedWord.split("").map((letter, index) => {
											const corret = target.charAt(index) == letter
											const contains = target.includes(letter)
											const wrong = !corret && !contains

											return <Tile
												corret={corret}
												contains={contains}
												wrong={wrong}
												key={index} 
												letter={letter}
											/>
										})
									}
								</TileRow>
							})
						}
						<TileRow>
							{Array.from({ length: target.length }, (_, i) => word.split("")[i] ?? undefined).map((letter, index) => (
								<Tile key={`${letter}${index}`} letter={letter} className={cn(index === word.length && "border-b-8")}/>
							))}
						</TileRow>
						{Array.from({length: QTY_TRIES - tries.length - 1}).map((_, i) => (
							<div key={i} className=" flex justify-center gap-3 w-full">
								{target.split("").map((_, j) => <TileSkeleton key={`${i}${j}`}/>)}
							</div>
						))}
					</>
				)}
			</div>
			<LossDialog 
				words={[target]}
				open={showLossDialog}
				onOpenChange={(open) => {
					setShowLossDialog(open)
					if(!open) ExitHandler();
				}}
			/>
		</div>
	)
}
