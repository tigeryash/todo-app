import React, { useState } from 'react'
import check from '../assets/images/icon-check.svg'
import {useSelector} from 'react-redux'
import { RootState } from '../state/store'

interface InputProps{
    onAddTodo: (text:string, pressed:boolean) => void
}

const Input:React.FC<InputProps> = ({onAddTodo}) => {
    const [inputText, setInputText] = useState<string>('')
    const [pressed, setPressed] = useState<boolean>(false)
    const isLightMode = useSelector((state: RootState) => state.theme.isLightMode)


    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault()
        if(inputText.trim() !== ''){
            onAddTodo(inputText, pressed)
            setInputText('')
            setPressed(false)
        }
    }

  return (
    <form className={`input ${isLightMode ? "input-dark" : "input-light"}`} onSubmit={handleAddTodo}>
        <button 
            type='button'
            className='complete-icon'
            style={{background: pressed ? 'linear-gradient(122deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'none'}}
            onClick={() => setPressed(!pressed)}
        >
            <img style={{visibility: pressed ? 'visible' : 'hidden'}} src={check} />
        </button>
        <input 
            className={`text-field ${isLightMode ? "text-field-d" : "text-field-l"}`}
            type='text'
            placeholder='Create a new todo...'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
        />
    </form>
  )
}

export default Input