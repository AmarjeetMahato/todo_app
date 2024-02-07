"use client"

import React, { useRef } from 'react'

interface Props{
    children:React.ReactNode
    action:(formData:FormData) => Promise<void | boolean>
    className?:string
    onSubmit?: () => void

}


const Form = ({action,className, onSubmit,children}:Props) => {
   
    const ref = useRef<HTMLFormElement>(null)

  return (
    <form ref={ref} 
    className={className}
    action={async (formData)=> {
       await action(formData)
        ref.current?.reset()
    }}
    onSubmit={onSubmit}
    > {children}</form>
  )
}

export default Form