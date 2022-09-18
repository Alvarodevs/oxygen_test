import React, { useState } from "react";
import {
    CardContainer,
    CardTitle,
    DataConversionContainer,
    MeasuresSelector,
    AmountToConvertInput,
    SelectorAndIconContainer,
    Options,
    InputContainer,
} from "./StyledCardConverter";
import { BsArrowLeftRight } from "react-icons/bs";
import CardBottom from "../CardBottom";

const CardConverter = () => {
    const [inputUnit, setInputUnit] = useState("km");
    const [resultUnit, setResultUnit] = useState("miles");
    const [result, setResult] = useState(0)
    const [optionSelected, setOptionSelected] = useState('km')
    const [inputAmount, setInputAmount] = useState(0)

    const handleSelection = (e) => {
        const allValues = e.target.value.split("_");
        setInputUnit(allValues[0]);
        setOptionSelected(allValues[0]);
        setResultUnit(allValues[1]);
    };

    const handleSwap = (e) => {
        setInputUnit(resultUnit);
        setResultUnit(inputUnit);
    }

    const handleInputOperations = (e) => {
        setInputAmount(e.target.value);
        if (inputUnit === "km") {
            return setResult(Math.round(e.target.value * 0.621371));
        } else if (inputUnit === "miles") {
            return setResult(e.target.value * 1.609344);
        }
    }
    console.log('RESULT', result);
    // const handleInput = e => {
    //     setInputAmount(e.target.value)
    // }

    return (
        <CardContainer>
            <CardTitle>convert</CardTitle>
            <DataConversionContainer>
                <SelectorAndIconContainer>
                    <MeasuresSelector onChange={handleSelection}>
                        <Options
                            name="km"
                            label="km &rarr; miles"
                            value="km_miles"
                        />
                        <Options
                            name="miles"
                            label="miles  &rarr; km"
                            value="miles_km"
                        />
                        <Options
                            name="feet"
                            label="feet  &rarr; meters"
                            value="feet_meters"
                        />
                        <Options
                            name="meters"
                            label="meters  &rarr; feet"
                            value="meters_feet"
                        />
                        <Options
                            name="cm"
                            label="cm  &rarr; inches"
                            value="cm_inches"
                        />
                        <Options
                            name="inches"
                            label="inches  &rarr; cm"
                            value="inches_cm"
                        />
                    </MeasuresSelector>
                    <BsArrowLeftRight onClick={handleSwap} />
                </SelectorAndIconContainer>

                <InputContainer>
                    <AmountToConvertInput
                        type="text"
                        inputmode="numeric"
                        onChange={handleInputOperations}
                    />
                    {inputUnit}
                </InputContainer>
            </DataConversionContainer>
            <CardBottom resultUnit={resultUnit} result={result} />
        </CardContainer>
    );
};

export default CardConverter;
