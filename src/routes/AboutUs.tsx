export const AboutUs = () => {
  return (
    <div className="self-center h-[60%] flex flex-col gap-5 align-middle">
      <div className="flex flex-col align-middle">
        <h1 className="self-center text-4xl text-amber-500 font-extrabold">SOBRE NÓS</h1>
        <hr className="w-[70vw] border-amber-500 border-2" />
      </div>
      <p className="w-[70vw] self-center text-justify text-1xl">
        Website desenvolvido por <strong className="text-amber-600">Leonardo Luz</strong> & <strong className="text-amber-600">Diego Prestes</strong> durante o curso de Análise e Desenvolvimento de Sistemas no <em>Instituo Federal do Rio Grande do Sul - campus Osório</em>
      </p>
      <hr className="w-[70vw] border-dashed border-amber-500 border-2 self-center" />
      <p className="w-[70vw] self-center text-justify text-1xl">
        Este projeto é um jogo interativo desenvolvido como parte da disciplina de Libras, com o objetivo de auxiliar no aprendizado do alfabeto manual da Língua Brasileira de Sinais (Libras).
      </p>
    </div>
  )
}
