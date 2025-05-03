type tileProps = {
  letter: string
  corret?: boolean
  contains?: boolean
  wrong?: boolean
  img?: string
}

export const Tile = ({ letter, corret, contains, wrong, img }: tileProps) => {
  return (
    <div className={`flex justify-center min-w-28 max-w-28 min-h-32 max-h-32 p-4 border-6 rounded-md font-extrabold ${wrong ? "bg-red-700 text-white border-red-700" : ""} ${(contains && !corret) ? "bg-yellow-200 border-yellow-200 text-amber-800" : ""} ${corret ? "bg-amber-500 border-amber-500 text-white" : ""} ${!wrong && !contains && !corret ? "border-amber-500 text-amber-600" : ""}`}>{img ? <img src={img} alt={letter} /> : <p className="text-4xl text-center self-center">{letter}</p>}</div>
  )
}
