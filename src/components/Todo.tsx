import React, { useState } from 'react'
import { Todo } from '../types'
import check from '../assets/images/icon-check.svg'
import Cross from '../assets/images/icon-cross.svg'

interface TodoProps {
    todo: Todo;
    onToggleTodo: (id: number) => void;
    onRemoveTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoProps> = ({todo, onRemoveTodo, onToggleTodo}) => {
     const [pressed, setPressed] = useState<boolean>(todo.completed)
  return (
    <li className='todo' key={todo.id}>
        <div className='left'>
            <button 
                className='complete-icon'
                style={{background: pressed ? 'linear-gradient(122deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'none'}}
                onClick={() => {
                    setPressed(!pressed)
                    onToggleTodo(todo.id)
                }}
            >
                <img style={{visibility: pressed ? 'visible' : 'hidden' }} src={check} />
            </button>
            <span 
                className='text'
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
            >
                {todo.text}
            </span>
        </div>
        <button 
            className='cross-icon'
            onClick={() => onRemoveTodo(todo.id)}
        >
            <img src={Cross} />
        </button>
    </li>
  )
}

export default TodoItem