import { useState,useEffect } from 'react'
import 'normalize.css';
import './App.css'
import Header from './components/header'
import Input from './components/input'
import Todos from './components/todos'
import Background from './components/background';
import { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [counter, setCounter] = useState<number>(0)

  useEffect(() => {
    setCounter(todos.length)
  }, [todos])

  const addTodo = (text:string, complete:boolean) => {
    const newTodo: Todo =  {
      id: counter + 1,
      text: text,
      completed: complete,
    }
    setTodos([...todos, newTodo])
    console.log(todos)
  }

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed} : todo
      )
    )
  }

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <Header />
      <Background />
      <Input onAddTodo={addTodo}/>
      <Todos todos={todos} onToggleTodo={toggleTodo} onRemoveTodo={removeTodo}  />
    </>
  )
}

export default App
