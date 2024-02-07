import AddTodo from "@/components/shared/AddTodo";
import Todo from "@/components/shared/Todo";
import { db } from "@/lib/db";
import Image from "next/image";



async function getData() {
   const data = await db.todo.findMany({
      select:{
        title:true,
        id:true,
        isCompleted:true
      },
      orderBy:{
        createdAt:"desc"
      }
   })

   return data
}


export default async function Home() {
    const data = await getData()
    console.log(data);
    
  return (
      <main className="w-screen py-20 gap-y-4   flex justify-center flex-col items-center">
          <span className="text-3xl font-extrabold uppercase">To-do-App</span>
          <h1 className="text-3xl font-extrabold">Next 14 <span className=" text-rose-500">Server Action</span></h1>
          <div className="flex items-center justify-center flex-col w-[1000px] ">

                     <AddTodo/>
                     <div className="mt-10 flex-col flex w-full gap-5 items-center justify-center ">
                          {data?.map((todo, id)=>(
                               <div key={id} className="w-full shadow-md">
                                   <Todo
                                     todo={todo}
                                   />
                               </div>
                          ))}
                     </div>
          </div>
    
      </main>
  );
}
