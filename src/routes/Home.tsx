import { useEffect, useState } from "react"
import { Tile } from "../components/Tile";
import { Modal } from "../components/Modal";
import words from "../assets/words.json"

export const Home = () => {
  const QTY_TRIES = 3;

  const [word, setWord] = useState<string>("");
  const [target, setTarget] = useState<string>("SALVE");
  const [tries, setTries] = useState<string[]>([]);
  const [win, setWin] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);

  const TypeHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key

    if (win || tries.length == QTY_TRIES) return
    if (key == "Backspace" && word.length > 0) setWord(prev => prev.slice(0, prev.length - 1))
    else if (key == "Enter" && word.length == target.length && tries.length < QTY_TRIES) {
      setWord("")
      if (word == target) {
        setWin(true)
      }
      setTries(prev => {
        return [...prev, word]
      })
    }

    else if (/^[A-Za-z]$/.test(key) && word.length < target.length) {
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

  function ContinueHandler(_: React.MouseEvent<HTMLInputElement, MouseEvent>): void {
    reset()
    const index = Math.floor(Math.random() * words.length)
    setTarget(words[index])
    setStreak(prev => { return prev += 1 })
  }

  function ExitHandler(_: React.MouseEvent<HTMLInputElement, MouseEvent>): void {
    reset()
    setStreak(0)
  }

  useEffect(() => {
    const index = Math.floor(Math.random() * words.length)
    setTarget(words[index])
  }, [])

  return (
    <div
      onKeyDown={TypeHandler} tabIndex={0}
      className="flex flex-col w-full h-full gap-4 align-top justify-top p-12"
    >
      <div className="flex flex-row gap-3 self-center">
        {
          target.split("").map((letter, index) => <Tile key={index} letter={letter} img={`${letter}.png`} />)
        }
      </div>
      <div className="flex flex-col gap-3 self-center">
        {
          tries.map(triedWord => {
            return <div className="flex flex-row gap-3 self-center">
              {
                triedWord.split("").map((letter, index) => {
                  const corret = target.charAt(index) == letter
                  const contains = target.includes(letter)
                  const wrong = !corret && !contains

                  return <Tile
                    corret={corret}
                    contains={contains}
                    wrong={wrong}
                    key={index} letter={letter} />
                })
              }
            </div>
          })
        }
      </div>
      <div className="flex flex-row gap-3 self-center">
        {
          word.split("").map((letter, index) => <Tile key={index} letter={letter} />)
        }
      </div>

      {
        win &&
        <Modal>
          <h1 className="self-center text-3xl text-white font-extrabold">VITORIA!!!</h1>
          <h1 className="self-center text-sm text-white font-extrabold">Você acertou em {tries.length} Tentativas</h1>
          {
            streak > 0 &&
            <h1 className="self-center text-sm text-white font-extrabold">Sequência de acertos: {streak}</h1>
          }
          <hr className="border-white w-full self-center border-2" />
          <div className="w-full flex flex-row justify-around align-middle">
            <input onClick={ExitHandler} className="bg-white font-bold text-black p-3 rounded-md cursor-pointer shadow-black shadow-md hover:shadow-transparent" type="button" value="SAIR" />
            <input onClick={ContinueHandler} className="bg-white font-bold text-black p-3 rounded-md cursor-pointer shadow-black shadow-md hover:shadow-transparent" type="button" value="CONTINUAR" />
          </div>
        </Modal>
      }
      {
        (!win && tries.length == QTY_TRIES) &&
        <Modal>
          <h1 className="self-center text-3xl text-white font-extrabold">DERROTA...</h1>
          <h1 className="self-center text-sm text-white font-extrabold">A palavra era {target} Tentativas</h1>
          <hr className="border-white w-full self-center border-2" />
          <div className="w-full flex flex-row justify-around align-middle">
            <input onClick={ExitHandler} className="bg-white font-bold text-black p-3 rounded-md cursor-pointer shadow-black shadow-md hover:shadow-transparent" type="button" value="TENTAR NOVAMENTE" />
          </div>
        </Modal>
      }
    </div>
  )
}
