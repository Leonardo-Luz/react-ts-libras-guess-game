type tileProps = {
  letter: string
  corret?: boolean
  contains?: boolean
  wrong?: boolean
}

export const Tile = ({ letter, corret, contains, wrong }: tileProps) => {
  return (
    <div className={`p-4 border-6 rounded-md font-extrabold ${wrong ? "bg-red-700 text-white border-red-700" : ""} ${(contains && !corret) ? "bg-yellow-200 border-yellow-200 text-amber-800" : ""} ${corret ? "bg-amber-500 border-amber-500 text-white" : ""} ${!wrong && !contains && !corret ? "border-amber-500 text-amber-600" : ""}`}>{letter}</div>
  )
}
