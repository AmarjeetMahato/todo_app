"use client"

import { edit } from "@/actions/todoAction";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import { todoType } from "@/types";
import { BiEdit } from "react-icons/bi";



const EditTodo = ({todo}:any) => {
    
     const [editTodo, setEditTodo] = useState<boolean>(false)

     const handleEdit = () => {
        setEditTodo(!editTodo)
     }

     const handleSubmit = () => {
        setEditTodo(false)
     }

  return (
    <div className="flex gap-5 items-center ">
  <Button 
   onClick={handleEdit}
   text={<BiEdit/>}
   actionButton
  />

  {editTodo ? (
    <Form 
      action={edit}
      onSubmit={handleSubmit}
    
    >
      <Input  name="inputId" value={todo.id} type="hidden" />
      <div className="flex justify-center">
                <Input
               type="text"
               name="newTitle"
               placeholder="Edit Todo..."


/>
      </div>
    </Form>
  ):(
    <>
    </>
  )


}
    </div>
  )
}

export default EditTodo