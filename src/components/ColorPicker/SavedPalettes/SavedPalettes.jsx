import React from 'react'
import SavedPaletteCard from '../SavedPaletteCard';
import {MainContainer} from './StyledSavedPalettes'

const SavedPalettes = () => {
  return (
      <MainContainer>
          <SavedPaletteCard />
          <SavedPaletteCard />
          <SavedPaletteCard />
          <SavedPaletteCard />
          <SavedPaletteCard />
      </MainContainer>
  );
}

export default SavedPalettes;