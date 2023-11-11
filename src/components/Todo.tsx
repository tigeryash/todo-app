import React, { useState } from 'react'
import { Todo } from '../types'
import check from '../assets/images/icon-check.svg'
import Cross from '../assets/images/icon-cross.svg'
import {useSelector} from 'react-redux'
import { RootState } from '../state/store'
import { DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps } from 'react-beautiful-dnd'

interface TodoProps {
    todo: Todo;
    onToggleTodo: (id: string) => void;
    onRemoveTodo: (id: string) => void;
    innerRef: (element: HTMLLIElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
    
}

const TodoItem: React.FC<TodoProps> = ({todo, onRemoveTodo, onToggleTodo, innerRef, draggableProps, dragHandleProps}) => {
     const [pressed, setPressed] = useState<boolean>(todo.completed)
     const isLightMode = useSelector((state: RootState) => state.theme.isLightMode)
  return (
    <li 
        className={`todo ${isLightMode ? 'todo-dark' : 'todo-light'}`} 
        ref={innerRef} 
        key={todo.id}
        {...draggableProps} 
        {...dragHandleProps}
    >
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
                className={`text ${isLightMode ? 'text-dark' : 'text-light'}`}
                style={{textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? isLightMode ? 'hsl(233, 11%, 84%)' : '' : ''
                    }}
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