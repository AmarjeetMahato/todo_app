"use client"


import React from 'react'
import Form from '../ui/Form'
import Button from '../ui/Button'
import Input from '../ui/Input'
import { createTodo } from '@/actions/todoAction'

const AddTodo = () => {
  return (
    <Form action={createTodo} className='w-full  mx-auto'>
          <div className='flex w-full'>
               <Input name='input' type='text' placeholder='Add Todo...' />
                <Button type='submit' text="Add"/>
          </div>
    </Form>
  )
}

export default AddTodo