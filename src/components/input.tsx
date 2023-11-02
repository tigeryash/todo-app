import React, { useState } from 'react'
import check from '../assets/images/icon-check.svg'

interface InputProps{
    onAddTodo: (text:string, pressed:boolean) => void
}

const Input:React.FC<InputProps> = ({onAddTodo}) => {
    const [inputText, setInputText] = useState<string>('')
    const [pressed, setPressed] = useState<boolean>(false)

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault()
        if(inputText.trim() !== ''){
            onAddTodo(inputText, pressed)
            setInputText('')
            setPressed(false)
        }
    }

  return (
    <form className='input' onSubmit={handleAddTodo}>
        <button 
            type='button'
            className='complete-icon'
            style={{background: pressed ? 'linear-gradient(122deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'none'}}
            onClick={() => setPressed(!pressed)}
        >
            <img style={{visibility: pressed ? 'visible' : 'hidden'}} src={check} />
        </button>
        <input 
            className='text-field'
            type='text'
            placeholder='Create a new todo...'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
        />
    </form>
  )
}

export default Input