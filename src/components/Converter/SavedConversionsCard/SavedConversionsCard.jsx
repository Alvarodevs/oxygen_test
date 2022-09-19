import React, { useState, useEffect } from "react";
import {
    SavedCard,
    MainContainer,
    CardsContainer,
    Title,
} from "./StyledSavedConversionCard";
import { TiDelete } from "react-icons/ti";
import {BsArrowRight} from "react-icons/bs"

const SavedConversionsCard = () => {
    const [keys, setKeys] = useState(Object.keys(localStorage));
    const [dataSaved, setDataSaved] = useState([]);

    // IIFE NOT WORKING
    // (function saveDataFromLocalStorage() {
    //     let dataFetched = [];
    //     keys.map((key) => {
    //         //dataFetched.push(JSON.parse(localStorage.getItem(key)));
    //         //setDataSaved(JSON.parse(localStorage.getItem(key)));
    //     });
    //     //setDataSaved(dataFetched);
    // })();


    // function checkLengthKeys() {
    //     if (keys.length !== Object.keys(localStorage).length) {
    //         return setKeys(Object.keys(localStorage));
    //     }
    // };

        //NOT RENDERING AUTOMATICALLY CARDS SAVED DATA, STORING IN LS OK
        useEffect(() => {
            //(keys.length !== Object.keys(localStorage).length) ? setKeys(Object.keys(localStorage)) : null;
            let dataFetched = [];
            keys.map((key) => {
                dataFetched.push(JSON.parse(localStorage.getItem(key)));
            });
            setDataSaved(dataFetched);
        }, []);

    const handleDelete = (indexToRemove) => {
        setKeys(k => k.filter((_, index) => index !== indexToRemove));
        setDataSaved(e => e.filter((_, index) => index !== indexToRemove));
        return localStorage.removeItem(keys[indexToRemove]);
    }


    return (
        <MainContainer>
            <Title>saved</Title>
            <CardsContainer>
                {dataSaved &&
                    dataSaved.map((item, i) => {
                        return (
                            // how insert utf symbol in template string?
                            <SavedCard key={i}>
                                {`  ${item.inputAmount} 
                                    ${item.inputUnit} 
                                    ->
                                    ${Math.round(item.result * 100) / 100} 
                                    ${item.resultUnit}
                                `}
                                <TiDelete onClick={() => handleDelete(i)}/>
                            </SavedCard>
                        );
                    })}
            </CardsContainer>
        </MainContainer>
    );
};

export default SavedConversionsCard;
