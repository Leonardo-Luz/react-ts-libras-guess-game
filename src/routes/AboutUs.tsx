export const AboutUs = () => {
  return (
    <div className="self-center h-[60%] flex flex-col gap-5 align-middle">
      <div className="flex flex-col align-middle">
        <h1 className="self-center text-4xl text-amber-500 font-extrabold">SOBRE NÓS</h1>
        <hr className="w-[70vw] border-amber-500 border-2" />
      </div>
      <p className="w-[70vw] self-center text-justify text-1xl">
        Website desenvolvido por <strong className="text-amber-800">Leonardo Luz</strong> & <strong className="text-amber-800">Diego Prestes</strong> durante a cadeira de Libras no <em>Instituo Federal do Rio Grande do Sul - campus Osório</em>
      </p>
      <hr className="w-[70vw] border-dashed border-amber-500 border-2 self-center" />
    </div>
  )
}
