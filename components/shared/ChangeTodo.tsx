import React from 'react'
import Button from "@/components/ui/Button"
import {AiOutlineCiCircle} from "react-icons/ai"
import Form from '../ui/Form'
import Input from '../ui/Input'
import { changeState } from '@/actions/todoAction'
import { todoType } from '@/types'


const ChangeTodo = ({todo}:{todo:todoType}) => {


  return (
    <Form

    action={changeState}
    >
        <input 
        name="inputId"
        value={todo.id}
         type="hidden"
         className='border-gray-700 border'

        />

        <Button actionButton type='submit' text={<AiOutlineCiCircle/>} />
    </Form>
  )
}

export default ChangeTodo