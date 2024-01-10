import React, { useState } from 'react'
import AddText from './AddText'
import TextItem from './TextItem'
import './Wall.css'

const Wall = () => {

    // Tracks the state of the text name and x,y coordinates on the wall
    const [wallText, setWallText] = useState([])

    // Adds new text items to the wall state
    const placeText = (textItem, cursorLocation) => {
        setWallText([...wallText, { textItem, cursorLocation }])

    }


    return (

        <div className='wall'>

            {/* Loads the AddText function */}
            <AddText placeText={placeText} />

            {/* Maps the wallText array onto the page */}
            {wallText.map((textItem) => <TextItem text={textItem.textItem} cursorLocation={textItem.cursorLocation} fontFamily={textItem.textItem.fontFamily} fontSize={textItem.textItem.fontSize} fontColour={textItem.textItem.fontColour} />)}

        </div>

    )

}



export default Wall