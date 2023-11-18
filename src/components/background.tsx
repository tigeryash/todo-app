import { useEffect, useState } from 'react'
import mdark from '../assets/images/bg-mobile-dark.jpg'
import mlight from '../assets/images/bg-mobile-light.jpg'
import ddark from '../assets/images/bg-desktop-dark.jpg'
import dlight from '../assets/images/bg-desktop-light.jpg'
import {useSelector} from 'react-redux'
import { RootState } from '../state/store'

const Background = () => {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
    const isLightMode = useSelector((state: RootState) => state.theme.isLightMode)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [screenWidth])
    
    let bgClass = 'bg-img'

    if(isLightMode){
        bgClass += ' dark-mode'
    }
    let bgSrc = ''
    if(screenWidth <= 768){
        bgClass += ' m-bg'
        bgSrc = isLightMode ? mdark : mlight
    }else {
        bgClass += ' d-bg'
        bgSrc = isLightMode ? ddark : dlight
    }

    const bgStyle = {
        backgroundImage: `url(${bgSrc})`
    }
  return (
    <img className={bgClass} src={bgSrc} style={bgStyle}/>
    
  )
}

export default Background