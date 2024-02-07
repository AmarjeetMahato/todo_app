import { validateHeaderValue } from 'http'
import React from 'react'


interface Props{
    name:string
    type:string
    placeholder?:string
    value?:string
    
}


const Input = ({name,value,type, placeholder}:Props) => {
  return (
    <div>
        <input name={name} type={type} value={value} placeholder={placeholder} 
         className='w-full p-2 outline-none border border-gray-200 bg-transparent shadow-md'
        />
    </div>
  )
}

export default Input