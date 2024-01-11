import React from 'react'

const TextItem = ({ text, cursorLocation, fontFamily, fontSize, fontColour }) => {

    // array of fonts for user to seelct or randomize
    const fontFamilyArray =
        [
            'Maulie Script, sans-serif',
            'Neumartha, sans-serif',
            'Cracksmoon, sans-serif',
            'Dellova, sans-serif',
            'Hey Christmas, sans-serif',
            'Callahan, sans-serif',
            'Rolling, sans-serif',
            'JENKINE, sans-serif',
            'Vintage Farmhouse, sans-serif',
            'Magic Halloween, sans-serif',
            'Mangosteen, sans-serif',
            'Staycool, sans-serif',
            'Mueda City, sans-serif',
            'Esther, sans-serif',
            'Santeriogh, sans-serif',
        ]

    // array of font colours for user to select or randomize
    const fontColourArray =
        [
            '#ED0A3F',
            '#FF8833',
            '#FFEB00',
            '#00FF00',
            '#0066FF',
            '#FF00FF',
            '#262626'
        ]




    return (

        // Template for the TextItem element. Div showing the text with style positioning the element. With randomized font family, size, and colour
        <div style={{ position: 'absolute', top: `${cursorLocation.y}px`, left: `${cursorLocation.x}px` }}>
            <span style={{ fontFamily: fontFamilyArray[fontFamily], fontSize: `${fontSize}rem`, color: 'RGB(221, 65, 36)', color: fontColourArray[fontColour] }}>{text.name}</span>

        </div>

    )
}

export default TextItem