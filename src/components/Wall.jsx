import React, { useState } from 'react'
import Text from './Text'
// import './Wall.css'

const Wall = () => {

    const [wallText, setWallText] = useState([])


    const placeText = (textItem, cursorLocation) => {

        setWallText([...wallText, { textItem, cursorLocation }])

    }


    return (

        <div className='wall'>

            <Text placeText={placeText} />
            {/* {wallText.map(() => <Text placeText={placeText} />)} */}
            {wallText.map((textItem) => <div style={{ position: 'absolute', top: `${textItem.cursorLocation.y}px`, left: `${textItem.cursorLocation.x}px` }}>
                {textItem.textItem.name}

            </div>)}
        </div>

    )

}



export default Wall