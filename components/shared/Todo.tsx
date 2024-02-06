
import React from 'react'



const Todo = ({todo}:any) => {
  return (
    <div className='w-full flex items-center justify-between bg-white py-3 px-20 rounded-xl'>
          <span className='text-center shadow-sm  font-bold uppercase'>{todo.title}</span>
    </div>
  )
}

export default Todo