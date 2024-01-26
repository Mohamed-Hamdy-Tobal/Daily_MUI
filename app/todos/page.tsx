import TodosList from '@/components/Todos/TodosList'
import { Todo } from '@/components/types/app';
import React, { useState, useEffect } from 'react'

const url = 'https://jsonplaceholder.typicode.com/todos';
const getData = async () => {
    try {
        const response = await fetch(url, {cache: 'force-cache'});
        const todosData = await response.json();
        return todosData
    } catch (error) {
        console.error(error);
    }
};

const Todos: React.FC = async () => {

    // In Server Side, Everything is on server side even console, jsx, ..
    // Here no need useEffect because it is on server side , it work automatic, not like react 
    // in react this part is called on client side, so we need to use useEffect
    const myTodos:Todo[] = await getData()
    console.log(myTodos)

    return (
        <div>
            <h1 className='text-[#333] text-3xl font-bold my-5'>Todos</h1>
            <TodosList myTodos={myTodos.slice(0, 12)} />
        </div>
    )
}


export default Todos