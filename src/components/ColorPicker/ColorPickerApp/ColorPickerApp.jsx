import React from 'react'
import { MainContainer } from './StyledColorPickerApp';
import  PaletteCreator  from '../PaletteCreator';
import SavedPalettes from '../SavedPalettes';

const ColorPickerApp = () => {
  return (
    <MainContainer>
      <PaletteCreator/>
      <SavedPalettes/>
    </MainContainer>
  )
}

export default ColorPickerApp;
