import React, { useEffect, useState } from 'react'
import Text from './Text'
// import './Wall.css'

const Wall = () => {

    const [wallText, setWallText] = useState([])

    // useEffect(() => { setWallText([...wallText,]) }, [wallText])

    // const [cursorLocation, setCursorLocation] = useState({ x: 0, y: 0 })


    // useEffect(() => {
    //     const updateCursorLocation = (e) => {
    //         setCursorLocation({ x: e.clientX, y: e.clientY })
    //         // addText()
    //     }

    //     window.addEventListener('mousedown', updateCursorLocation)


    //     return () => {
    //         window.removeEventListener('mousedown', updateCursorLocation)
    //     }

    // }, [])

    const placeText = (text, cursorLocation) => {


        setWallText([...wallText, { text, cursorLocation }])


    }

    console.log(wallText)



    return (

        <div className='wall'>
            <Text placeText={placeText} />
        </div>

    )

}



export default Wall