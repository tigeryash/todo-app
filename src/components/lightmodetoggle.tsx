import React from 'react'
import light from '../assets/images/icon-sun.svg'
import dark from '../assets/images/icon-moon.svg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../state/store'
import { toggleTheme } from '../state/lightmode/lightmodeSlice'

const LightModeToggle: React.FC = () => {
    const isLightMode = useSelector((state: RootState) => state.theme.isLightMode)
    const dispatch = useDispatch()
  return (
        <button className='toggle' onClick={() => dispatch(toggleTheme())}>
            {isLightMode ? (<img src={light} />): (<img src={dark} />)}
        </button>
    )
}

export default LightModeToggle