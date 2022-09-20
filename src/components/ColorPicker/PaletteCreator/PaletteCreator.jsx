import React, {useState} from 'react'
import CirclesColors from '../CircleColors';
import Editor from '../Editor';
import {PaletteCreatorContainer} from "./StyledPaletteCreator";

const PaletteCreator = () => {

    const [colorClicked, setColorClicked] = useState('')

    const handleColorToCircles = (color) => {
        setColorClicked(color.hex);
    }

    return (
        <PaletteCreatorContainer>
            <CirclesColors color={colorClicked}></CirclesColors>
            <Editor handleColorToCircles={handleColorToCircles}></Editor>
        </PaletteCreatorContainer>
    );
};

export default PaletteCreator;
