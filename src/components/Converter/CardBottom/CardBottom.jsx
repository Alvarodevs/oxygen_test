import React from 'react'
import {CardBottomContainer, Result, ResultContainer, ResultUnit} from './StyledCardBottom';
import {BsHeart} from 'react-icons/bs';

const CardBottom = () => {

    return (

        <CardBottomContainer>
            <BsHeart/>
            <ResultContainer>
                <Result>
                    100 
                </Result>
                <ResultUnit>
                inches
                </ResultUnit>
            </ResultContainer>
        </CardBottomContainer>
  
    )
}

export default CardBottom;