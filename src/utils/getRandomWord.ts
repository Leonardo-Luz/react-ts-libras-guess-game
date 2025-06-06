import words from "../assets/words.json"

export default (difficulty: "easy" | "medium" | "hard") => {
	const parsedWords = words.filter(word => {
		switch (difficulty) {
			case "easy":
				return word.length <= 4
			case "medium":
				return word.length <= 6
			case "hard":
				return word.length >= 6
		}
	})

	const index = Math.floor(Math.random() * parsedWords.length)

	return parsedWords[index]
}
