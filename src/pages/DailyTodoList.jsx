import React from 'react'
import { useSelector } from 'react-redux'

export default function DailyTodoList() {
 const {todos} = useSelector((state)=>state.todos) 
  return (
    <div>
        <ul>
        {
            todos.map(todo=>(
                <li key={todo.id}>
                    {todo.title}
                </li>
            ))
        }
      </ul>
    </div>
  )
}
