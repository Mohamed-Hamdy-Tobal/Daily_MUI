import { PageProps } from '@/.next/types/app/layout';
import type { Todo } from '@/components/types/app';
import { notFound } from 'next/navigation';

import React from 'react'

const fetchTodo = async (id: string) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

    try {
        const response = await fetch(url);
        const todosData = await response.json();
        return todosData
    } catch (error) {
        console.error(error);
    }
};

export async function generateStaticParams(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const todos: Todo[] = await response.json();
    const someTodos = todos.splice(0, 10)
    return someTodos.map((todo) => ({todo:todo.id.toString()}))
}

type propsPage = {
    params: {
        todo: string
    }
}

const Todo = async ({ params }: PageProps) => { // params is like context of serverSide, it is a props for dynamic pages
    const myTodo: Todo = await fetchTodo(params.todo)
    console.log(myTodo)
    if (!myTodo.id) {
        return notFound()
    }
    return (
        <div className='todo flex items-center p-5 flex-col text-center justify-between my-6'>
            <p className='text-[30px] text-[#333]'>{myTodo.title}</p>
            <div className="info flex items-center justify-between gap-5 flex-col">
                <p className='text-[#d5d5d5] text-[18px]'>{myTodo.completed ? 'Completed' : 'Not Completed'}</p>
                <p>User ID : {myTodo.userId}</p>
            </div>
        </div>
    )
}


export default Todo