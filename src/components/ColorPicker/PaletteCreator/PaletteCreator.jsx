import React from 'react'
import CirclesColors from '../CircleColors';
import Editor from '../Editor';
import {PaletteCreatorContainer} from "./StyledPaletteCreator";

const PaletteCreator = () => {
    return (
        <PaletteCreatorContainer>
            <CirclesColors></CirclesColors>
            <Editor></Editor>
        </PaletteCreatorContainer>
    );
};

export default PaletteCreator;
