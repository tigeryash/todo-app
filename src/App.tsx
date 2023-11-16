import { useState, useEffect} from 'react'
import 'normalize.css';
import './App.css'
import Header from './components/header'
import Input from './components/input'
import Todos from './components/todos'
import Background from './components/background';
import { Todo } from './types';
import { v4 as uuidv4 } from 'uuid';
import {useSelector} from 'react-redux'
import { RootState } from './state/store'
import data from './data.json'

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos')
    if(saved){
      return JSON.parse(saved)
    }else{
      return data
    }
  })
  const isLightMode = useSelector((state: RootState) => state.theme.isLightMode)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (!isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);


  const addTodo = (text:string, complete:boolean) => {
    const newTodo: Todo =  {
      id: uuidv4(),
      text: text,
      completed: complete,
    }
    setTodos([...todos, newTodo])
    console.log(todos)
  }

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed} : todo
      )
    )
  }

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <Background />
      <div className='container'>
        <Header />
        <Input onAddTodo={addTodo}/>
        <Todos todos={todos} setTodos={setTodos} onToggleTodo={toggleTodo} onRemoveTodo={removeTodo}  />

        <p className='instructions'>Drag and dop to reorder list</p>
      </div>
    </>
  )
}

export default App
