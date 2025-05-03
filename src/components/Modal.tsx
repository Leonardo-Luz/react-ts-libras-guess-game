import { ReactNode } from "react"

type modalProps = {
  children: ReactNode
}

export const Modal = ({ children }: modalProps) => {
  return (
    <div className="flex align-middle justify-center fixed top-0 left-0 bg-[#00000088] backdrop-blur-sm w-[100vw] h-[100vh]">
      <div className="overflow-scroll shadow-black shadow-lg flex flex-col align-middle justify-around p-4 gap-3 bg-amber-500 w-[60%] h-[50%] self-center rounded-3xl">{children}</div>
    </div>
  )
}
