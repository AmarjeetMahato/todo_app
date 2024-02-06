"use client"

import clsx from "clsx"
import { ReactNode } from "react"

interface Props {
    type? : "button" | "submit" | "reset"
    text:string | ReactNode
    onClick?:()=>void
    actionButton? : boolean

}

const Button = ({type, text, onClick, actionButton}:Props) => {
  return (
    <button
    onClick={onClick}
    type={type}
className={clsx(actionButton && "bg-orange-700 rounded-full p-2 text-white","bg-orange-700 px-2 text-white")}
    >
       {text}
    </button>
  )
}

export default Button