"use server"


import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";


export async function createTodo(formData:FormData) {
      
    const input = formData.get('input') as string

   await db?.todo.create({
        data:{
            title: input
        }
    })
    
    revalidatePath("/")

}
