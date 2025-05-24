import { useEffect, useRef, useState } from "react"
import { Tile } from "../components/Tile";
import { Modal } from "../components/Modal";
import words from "../assets/words.json"

export const Home = () => {
  const QTY_TRIES = 3;

  const [word, setWord] = useState<string>("");
  const [target, setTarget] = useState<string>("SALVE");
  const [tries, setTries] = useState<string[]>([]);
  const [win, setWin] = useState<boolean>(false);
  const [rules, setRules] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);
  const [highscore, setHighscore] = useState<number>(0);
  const inputRef = useRef<HTMLDivElement>(null);

  const TypeHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key

    if (win || tries.length == QTY_TRIES) return
    if (key == "Backspace" && word.length > 0) setWord(prev => prev.slice(0, prev.length - 1))
    else if (key == "Enter" && word.length == target.length && tries.length < QTY_TRIES) {
      setWord("")
      if (word == target) {
        return ContinueHandler()
      }
      setTries(prev => {
        return [...prev, word]
      })
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

  function ExitHandler(_: React.MouseEvent<HTMLInputElement, MouseEvent>): void {
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
    target ?
      <div
        ref={inputRef}
        onKeyDown={TypeHandler} tabIndex={0}
        className="flex outline-0 flex-col w-full h-full gap-4 align-top justify-top p-12"
      >
        <div className="self-center flex flex-row justify-between p-4 w-[70%]">
          <label
            onClick={() => setRules(true)}
            className="p-1 flex flex-row self-center gap-2 cursor-pointer"
          >
            <p className="self-center rounded-full pr-2 pb-0.5 pt-0.5 pl-2 text-center font-bold bg-amber-400 text-white">i</p>
            <p className="self-center">Regras</p>
          </label>
          <div className="flex flex-row justify-between p-4 gap-20">
            <p>Highscore: {highscore}</p>
            <p>Streak: {streak}</p>
          </div>
        </div>
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
          {
            target.substring(word.length).split("").map((_, index) => <Tile key={index} letter={""} />)
          }
        </div>
        {
          (!win && tries.length == QTY_TRIES) &&
          <Modal>
            <h1 className="self-center text-4xl text-white font-extrabold">Derrota!</h1>
            <h1 className="self-center text-2xl text-white font-extrabold">A palavra era {target}</h1>
            <hr className="border-white w-full self-center border-2" />
            <div className="w-full flex flex-row justify-around align-middle">
              <input onClick={ExitHandler} className="bg-white font-bold text-black p-3 rounded-md cursor-pointer shadow-black shadow-md hover:shadow-transparent" type="button" value="TENTAR NOVAMENTE" />
            </div>
          </Modal>
        }
        {
          rules &&
          <Modal>
            <div className="flex flex-row justify-between">
              <h1 className="self-center text-3xl text-white font-extrabold">Regras:</h1>
              <input onClick={() => setRules(false)} className="font-bold text-white text-2xl cursor-pointer" type="button" value="Fechar" />
            </div>
            <hr className="border-white w-full self-center border-2" />
            <h1 className="self-center text-2xl text-white">Palavra que você deve descobrir:</h1>
            <div className="p-4 bg-white rounded-md inset-shadow-sm inset-shadow-black flex flex-row gap-3 self-center">
              {
                "EXEMPLO".split("").map((letter, index) => <Tile key={index} letter={letter} img={`${letter}.png`} />)
              }
            </div>

            <h1 className="self-center text-2xl text-white">Tentativa de descobrir a palavra:</h1>
            <div className="p-4 bg-white rounded-md inset-shadow-sm inset-shadow-black flex flex-row gap-3 self-center">
              {
                "AXAEAAO".split("").map((letter, index) => {
                  return <Tile key={index}
                    corret={index == 1 || index == 6}
                    wrong={index != 1 && index != 6 && index != 3}
                    contains={index == 3}
                    letter={letter}
                  />
                })
              }
            </div>
            <div className="p-4 bg-white rounded-md inset-shadow-sm inset-shadow-black flex flex-row gap-3 self-start">
              {
                "XO".split("").map((letter, index) => {
                  return <Tile key={index}
                    corret
                    letter={letter}
                  />
                })
              }
              <h1 className="self-center text-xl text-black">Letras no local correto</h1>
            </div>
            <div className="p-4 bg-white rounded-md inset-shadow-sm inset-shadow-black flex flex-row gap-3 self-start">
              {
                "E".split("").map((letter, index) => {
                  return <Tile key={index}
                    contains
                    letter={letter}
                  />
                })
              }
              <h1 className="self-center text-xl text-black">Letra na posição errada</h1>
            </div>
            <div className="p-4 bg-white rounded-md inset-shadow-sm inset-shadow-black flex flex-row gap-3 self-start">
              {
                "A".split("").map((letter, index) => {
                  return <Tile key={index}
                    wrong
                    letter={letter}
                  />
                })
              }
              <h1 className="self-center text-xl text-black">Letra errada</h1>
            </div>
            <hr className="border-white mt-4 w-full self-center border-2" />
            <div className="w-full flex flex-row justify-around align-middle">
              <input onClick={() => setRules(false)} className="bg-white font-bold text-black p-3 rounded-md cursor-pointer shadow-black shadow-md hover:shadow-transparent" type="button" value="Fechar" />
            </div>
          </Modal>
        }
      </div> :
      <div>loading</div>
  )
}
