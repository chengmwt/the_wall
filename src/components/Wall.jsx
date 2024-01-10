import React, { useEffect, useState } from 'react'
import Text from './Text'
// import './Wall.css'

const Wall = () => {

    const [wallText, setWallText] = useState([])


    const placeText = (text, cursorLocation) => {

        setWallText([...wallText, { text, cursorLocation }])

    }

    console.log(wallText)


    return (

        <div className='wall'>

            <Text placeText={placeText} />
            {/* {wallText.map(() => <Text placeText={placeText} />)} */}
        </div>

    )

}



export default Wall