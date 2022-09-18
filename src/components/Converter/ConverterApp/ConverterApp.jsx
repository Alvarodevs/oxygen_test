import React from 'react'
import {AppConverterContainer} from './StyledConverterApp'
import CardConverter from '../CardConverter'
import SavedConversionCard from '../SavedConversionsCard'

const ConverterApp = () => {

  return (

    <AppConverterContainer>
      
      <CardConverter/>

      <SavedConversionCard/>
        
    </AppConverterContainer>

  )
}

export default ConverterApp;