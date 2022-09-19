import React from 'react'
import {AppConverterContainer} from './StyledConverterApp'
import CardConverter from '../CardConverter'
import SavedConversionCard from '../SavedConversionsCard'
import Footer from '../Footer'

const ConverterApp = () => {

  return (

    <AppConverterContainer>
      
      <CardConverter/>

      <SavedConversionCard/>

      <Footer/>  
    </AppConverterContainer>

  )
}

export default ConverterApp;