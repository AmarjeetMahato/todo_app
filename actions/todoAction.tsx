"use server"


import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";


export async function createTodo(formData:FormData) {
      
    const input = formData.get('input') as string

    if(!input.trim()) return;

   await db?.todo.create({
        data:{
            title: input
        }
    })


    
    revalidatePath("/")

}


export async function changeState(formData :FormData){
       
    const inputId = formData.get('inputId') as string
    const todo = await db.todo.findUnique({
        where:{
            id:inputId
        }
    });


    if(!todo)  return

    const updatedStatus = !todo?.isCompleted


    await db.todo.update({
        where:{
            id:inputId
       },
       data:{
        isCompleted: updatedStatus
       }
    })

   revalidatePath("/")


    return updatedStatus
}



export async function edit(formData:FormData){


      const input = formData.get("newTitle") as string
      const inputId = formData.get("inputId") as string



      await  db.todo.update({
        where:{
            id:inputId
        },
        data:{
            title:input
        }
      })



      revalidatePath("/")
}


export async function deleteTodo(formData: FormData){

    const inputId = formData.get("inputId") as string
    
    await  db.todo.delete({
        where:{
            id:inputId
        }
    })

    revalidatePath("/")
}