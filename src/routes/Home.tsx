import { useEffect, useRef, useState } from "react"
import { Tile } from "@/components/GuessGame/Tile";
import HowToPlayDialog from "@/components/HowToPlayDialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import LossDialog from "@/components/LossDialog";
import TileSkeleton from "@/components/GuessGame/TileSkeleton";
import TileRow from "@/components/GuessGame/TileRow";
import ImageTile from "@/components/GuessGame/ImageTile";
import { DeleteIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import KeyboardKey from "@/components/GuessGame/KeyboardKey";
import getRandomWord from "@/utils/getRandomWord";

export const Home = () => {
	const QTY_TRIES = 3;

	const [word, setWord] = useState<string>("");
	const [target, setTarget] = useState<string>("SALVE");
	const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy");
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
			handleNewTry()
		} else if (/^[A-Za-zÇç]$/.test(key) && word.length < target.length) {
			addNewLetter(key)
		}
	}

	function addNewLetter(letter: string) {
		if (!/^[A-Za-zÇç]$/.test(letter) || word.length >= target.length) return
		setWord(prev => prev + letter.toUpperCase())
	}

	function handleDifficultyChange() {
		setDifficulty(prev => {
			switch (prev) {
				case "easy":
					return "medium"
				case "medium":
					return "hard"
				case "hard":
					return "easy"
			}
		})
	}

	function handleNewTry() {
		if (word.length < target.length) {
			toast("Palavra inválida! Letras faltando.")
			return
		}

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

		if (tries.length + 1 === QTY_TRIES) {
			setTimeout(() => setShowLossDialog(true), 0)
		}
	}

	function reset() {
		setWord("");
		setTarget(getRandomWord(difficulty))
		setTries([]);
		setWin(false);
	}

	function ContinueHandler(): void {
		reset()
		setTarget(getRandomWord(difficulty))
		setStreak(prev => { return prev += 1 })
	}

	function ExitHandler(): void {
		reset()
		setStreak(0)
	}

	useEffect(() => {
		setTarget(getRandomWord(difficulty))

		setDifficulty(localStorage.getItem("difficulty") as "easy" | "medium" | "hard" ?? "easy")
		setHighscore(parseInt(localStorage.getItem("highscore") ?? "0"))
	}, [])

	useEffect(() => {
		inputRef?.current?.focus();
	}, [target])

	useEffect(() => {
		reset()
		localStorage.setItem("difficulty", difficulty)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [difficulty])

	useEffect(() => {
		if (streak > highscore) {
			setHighscore(streak)
			localStorage.setItem("highscore", streak.toString())
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [streak])

	return (
		<div
			ref={inputRef}
			onKeyDown={TypeHandler} tabIndex={0}
			className="flex flex-col align-top justify-top w-full h-full gap-4 outline-0 "
		>
			<div className="flex justify-between items-center py-4 w-full">
				<div className=" flex justify-start items-center flex-1">
					<HowToPlayDialog>
						<Button size="sm" variant="ghost" className="px-2">
							<span className="inline-flex justify-center items-center rounded-full size-5.5 text-base font-bold bg-primary text-primary-foreground">i</span>
							Como jogar?
						</Button>
					</HowToPlayDialog>
				</div>
				<div className=" flex justify-center items-center flex-1">
					<Button
						size="sm"
						variant="ghost"
						onClick={handleDifficultyChange}
						className={`
							font-bold
							${difficulty == "easy" && "bg-correct text-correct-foreground hover:bg-correct/75 hover:text-correct-foreground dark:hover:bg-correct/75 dark:hover:text-correct-foreground"}
							${difficulty == "medium" && "bg-mispositioned text-mispositioned-foreground hover:bg-mispositioned/75 hover:text-mispositioned-foreground dark:hover:bg-mispositioned/75 dark:hover:text-mispositioned-foreground"}
							${difficulty == "hard" && "bg-incorrect text-incorrect-foreground hover:bg-incorrect/75 hover:text-incorrect-foreground dark:hover:bg-incorrect/75 dark:hover:text-incorrect-foreground"}`
						}
					>
						DIFICULDADE: {difficulty.toUpperCase()}
					</Button>
				</div>
				<div className=" flex justify-end items-center flex-1">
					<div className="flex justify-between px-2 gap-4 text-nowrap">
						<span>{highscore > 0 && `Maior Pontuação ${highscore}`}</span>
						<span>{streak > 0 && `Sequência ${streak}`}</span>
					</div>
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
								<Tile key={`${letter}${index}`} letter={letter} className={cn(index === word.length && "border-b-10 rounded-2xl")} />
							))}
						</TileRow>
						{Array.from({ length: QTY_TRIES - tries.length - 1 }).map((_, i) => (
							<TileRow key={i}>
								{target.split("").map((_, j) => <TileSkeleton key={`${i}${j}`} />)}
							</TileRow>
						))}
					</>
				)}
			</div>
			<div className="flex flex-col gap-1 mx-auto pb-20 max-w-[650px] w-full">
				<div className="flex justify-center gap-1">
					{["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((letter) => (
						<KeyboardKey
							key={`keyboard${letter}`}
							className="w-[8.4%]"
							onClick={() => addNewLetter(letter)}
						>
							{letter}
						</KeyboardKey>
					))}
				</div>
				<div className="flex justify-center gap-1">
					{["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"].map((letter) => (
						<KeyboardKey
							key={`keyboard${letter}`}
							className="w-[8.4%]"
							onClick={() => addNewLetter(letter)}
						>
							{letter}
						</KeyboardKey>
					))}
					<KeyboardKey
						className="w-[8.4%]"
						onClick={() => setWord(prev => {
							if (prev === "") return ""
							return prev.slice(0, -1)
						})}
					>
						<DeleteIcon className="size-6" />
					</KeyboardKey>
				</div>
				<div className="flex justify-center gap-1">
					{["Z", "X", "C", "V", "B", "N", "M"].map((letter) => (
						<KeyboardKey
							key={`keyboard${letter}`}
							className="w-[8.4%]"
							onClick={() => addNewLetter(letter)}
						>
							{letter}
						</KeyboardKey>
					))}
					<KeyboardKey
						className=" w-[18%] h-full"
						onClick={handleNewTry}
					>
						Enter
					</KeyboardKey>
				</div>
			</div>
			<LossDialog
				words={[target]}
				open={showLossDialog}
				onOpenChange={(open) => {
					setShowLossDialog(open)
					if (!open) ExitHandler();
				}}
			/>
		</div>
	)
}
