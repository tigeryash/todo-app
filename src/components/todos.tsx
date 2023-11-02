import React from 'react'
import { Todo } from '../types'
import TodoItem from './Todo';

interface TodosProps {
    todos: Todo[];
    onToggleTodo: (id: number) => void
    onRemoveTodo: (id: number) => void
}

const Todos: React.FC<TodosProps> = ({todos, onRemoveTodo, onToggleTodo}) => {

  return (
    <section className='todos'>
        <ul className='todolist'>
            {todos.map((todo) => (
                <TodoItem onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo} todo={todo} />
            ))}
        </ul>
    </section>
  )
}

export default Todos