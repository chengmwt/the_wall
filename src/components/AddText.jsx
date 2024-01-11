import React, { useState, useEffect } from 'react'

const Text = ({ placeText }) => {

    // Tracks the state of the cursor location
    const [cursorLocation, setCursorLocation] = useState({ x: 0, y: 0 })

    // Tracks the name and id of the text item
    const [textItem, setTextItem] = useState('')

    const addText = () => {

        // Creates the object with name and id
        const newItem = {
            name: prompt('add text', 'write something'),
            id: Math.random(),
            fontFamily: Math.floor(Math.random() * 15),
            fontSize: Math.floor(Math.random() * 4 + 2),
            fontColour: Math.floor(Math.random() * 7)
        }
        // Updates the text item
        setTextItem(newItem)

    }

    // When user clicks the mouse, set the cursor location and run add text
    const updateCursorLocation = (e) => {
        setCursorLocation({ x: e.clientX, y: e.clientY })
        addText()

    }


    useEffect(() => {
        // Places the text on the wall with the text item object and location
        placeText(textItem, cursorLocation)
        // everytime that the text item changes
    }, [textItem])


    // Event listener for mouse click location
    useEffect(() => {

        window.addEventListener('mousedown', updateCursorLocation)

        return () => {
            window.removeEventListener('mousedown', updateCursorLocation)

        }

    }, [])


}

export default Text