import Link from 'next/link'
import React from 'react'

const TodosList = ({ myTodos }: { myTodos: any[] }) => {
    return (
        <div className='todos flex justify-between flex-wrap gap-5'>
            {myTodos.map((todo: any, index: number) => {
                return (
                    <div className='todo w-[30%] flex items-center p-5 flex-col text-center justify-between' key={index}>
                        <p className='text-[30px] text-[#333]'>{todo.title}</p>
                        <div className="info flex items-center justify-between gap-5 flex-col">
                            <p className='text-[#d5d5d5] text-[18px]'>{todo.completed ? 'Completed':'Not Completed'}</p>
                            <Link href={`/todos/${todo.id.toString()}`} className='main-btn w-[100px] h-[40px] rounded-lg text-white leading-[40px]'>{todo.id}</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}



export default TodosList

// 33