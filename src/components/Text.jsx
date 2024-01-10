import React, { useState, useEffect } from 'react'

const Text = ({ placeText }) => {


    const [cursorLocation, setCursorLocation] = useState({ x: 0, y: 0 })
    const [textItem, setTextItem] = useState('')

    const addText = () => {

        const newItem = {
            name: prompt('add test', 'write something'),
            id: Math.random()
        }

        setTextItem(newItem)

    }

    const updateCursorLocation = (e) => {
        setCursorLocation({ x: e.clientX, y: e.clientY })
        addText()


    }


    useEffect(() => placeText(textItem, cursorLocation), [textItem])

    console.log(textItem, cursorLocation)

    useEffect(() => {

        window.addEventListener('mousedown', updateCursorLocation)

        return () => {
            window.removeEventListener('mousedown', updateCursorLocation)

        }

    }, [])



    return (
        <div style={{ position: 'absolute', top: `${cursorLocation.y}px`, left: `${cursorLocation.x}px` }}>
            {textItem.name}

        </div>
    )
}

export default Text