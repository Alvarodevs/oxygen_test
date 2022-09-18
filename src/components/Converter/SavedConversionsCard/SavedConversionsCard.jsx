import React from "react";
import {
    SavedCard,
    MainContainer,
    CardsContainer, Title,
} from "./StyledSavedConversionCard";
import {TiDelete} from 'react-icons/ti'

const SavedConversionsCard = () => {

//const localStorageData = localStorage.getItem()
const keys = Object.keys(localStorage);

console.log(localStorage.getItem(item));  

    return (
        <MainContainer>
            <Title>saved</Title>
            <CardsContainer>

                {
                    keys.map((item, i) => {
                        
                        <SavedCard key={item}>
                            1 km &rarr; 0.16 miles
                            <TiDelete />
                        </SavedCard>
                        })
                }
                <SavedCard>
                    1 km &rarr; 0.16 miles
                    <TiDelete />
                </SavedCard>
                <SavedCard>
                    1 km &rarr; 0.16 miles
                    <TiDelete />
                </SavedCard>
                <SavedCard>
                    1 km &rarr; 0.16 miles
                    <TiDelete />
                </SavedCard>
                <SavedCard>
                    1 km &rarr; 0.16 miles
                    <TiDelete />
                </SavedCard>
            </CardsContainer>
        </MainContainer>
    );
}


export default SavedConversionsCard;