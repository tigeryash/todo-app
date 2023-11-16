import React, { useState, useEffect } from 'react'
import { Todo } from '../types'
import TodoItem from './Todo';
import {useSelector} from 'react-redux'
import { RootState } from '../state/store'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface TodosProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    onToggleTodo: (id: string) => void
    onRemoveTodo: (id: string) => void
}

const Todos: React.FC<TodosProps> = ({todos, setTodos, onRemoveTodo, onToggleTodo}) => {
  const [filter, setFilter] = useState<Todo[]>(todos)
  const [state, setState] = useState<string>('all')
  const isLightMode = useSelector((state: RootState) => state.theme.isLightMode)


  useEffect(() => {
    let newFilteredTodos
    if(state === 'completed'){
        newFilteredTodos = todos.filter(todo => todo.completed)
    }else if(state === 'active'){
        newFilteredTodos = todos.filter(todo => !todo.completed)
    }else{
        newFilteredTodos = todos
    }
    setFilter(newFilteredTodos)
  }, [todos, state])

  const Active = () => {
    setFilter(todos.filter(todo => todo.completed === false))
    setState('active')
  }

  const Completed = () => {
    setFilter(todos.filter(todo => todo.completed === true))
    setState('completed')
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => todo.completed === false))
    setFilter(todos)
  }

  const all = () => {
    setFilter(todos)
    setState('all')
  } 

  const handleDragEnd = (results:DropResult) => {
    const {destination, source, type} = results

    if(!destination){
      return
    }

    if(source.droppableId === destination.droppableId && source.index === destination.index){
      return
    }

    if(type === 'group'){
      const newTodos = [...todos]
      const [removed] = newTodos.splice(source.index, 1)
      newTodos.splice(destination.index, 0, removed)
      return setTodos(newTodos)
      
    }
  }

  return (
    <section className='todos'>
      <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="todos" type='group'>
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef} className='todolist'>
                {filter.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided) => (
                      <TodoItem 
                        key={todo.id}
                        draggableProps={provided.draggableProps} 
                        dragHandleProps={provided.dragHandleProps} 
                        innerRef={provided.innerRef}
                        onRemoveTodo={onRemoveTodo} 
                        onToggleTodo={() => {
                          onToggleTodo(todo.id)
                          if(filter === todos){
                            all()
                          }else if(todo.completed){
                            Completed()
                          }else{
                            Active()
                          }
                        }} 
                        todo={todo} 
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className={`todo bottom ${isLightMode ? 'bottom-dark' : 'bottom-light'}`}>
          <p className='items-m'>{filter.length} items left</p>
          <button className='completed-m' onClick={clearCompleted}>Clear Completed</button>
      </div>

        <div className={`filters ${isLightMode ? 'filters-dark' : 'filters-light'}`}>
          <p className='items-d'>{filter.length} items left</p>
          <div className='buttons'>
            <button onClick={all}>All</button>
            <button onClick={Active}>Active</button>
            <button onClick={Completed}>Completed</button>
          </div>

          <button className='completed-d' onClick={clearCompleted}>Clear Completed</button>
        </div>


    </section>
  )
}

export default Todos