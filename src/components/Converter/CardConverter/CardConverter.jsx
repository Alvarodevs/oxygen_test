import React, { useState, useId } from "react";
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
import CardBottom from "../CardConverterBottom";
import {v4 as uuid} from "uuid";

const CardConverter = () => {
    const [convertData, setConvertData] = useState({
        inputAmount: 0,
        inputUnit: "km",
        result: 0,
        resultUnit: "miles",
    });

    const id = uuid();

    const handleSelection = (e) => {
        const unitsValuesPair = e.target.value.split("_");
        setConvertData(() => ({
            ...convertData,
            inputUnit: unitsValuesPair[0],
            resultUnit: unitsValuesPair[1],
            inputAmount: 0,
            result: 0,
        }));
    };

    const Operations = (number) => {
        if (convertData.inputUnit === "km") {
            return number * 0.621371;
        } else if (convertData.inputUnit === "miles") {
            return number * 1.609344;
        } else if (convertData.inputUnit === "feet") {
            return number * 0.3048;
        } else if (convertData.inputUnit === "meters") {
            return number * 3.280839895;
        } else if (convertData.inputUnit === "cm") {
            return number * 0.3937007874;
        } else if (convertData.inputUnit === "inches") {
            return number * 2.54;
        }
    };

    const handleSwap = (e) => {
        setConvertData(() => ({
            ...convertData,
            inputUnit: convertData.resultUnit,
            resultUnit: convertData.inputUnit,
            inputAmount: convertData.result,
            result: convertData.inputAmount,
        }));
    };

    const handleInputOperations = (e) => {
        setConvertData(() => ({
            ...convertData,
            inputAmount: parseInt(e.target.value),
            result: Operations(e.target.value)
        }));
    };
    
    //Data manipulation in localStorage

    const saveData = () => { 
        localStorage.setItem(id, JSON.stringify(convertData));
        window.location.reload(); //works but not efficient
    }

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
                        value={convertData.inputAmount ? convertData.inputAmount : 0}
                    />
                    {convertData.inputUnit}
                </InputContainer>
            </DataConversionContainer>
            <CardBottom
                resultUnit={convertData.resultUnit}
                result={convertData.result}
                saveData={saveData}
            />
        </CardContainer>
    );
};

export default CardConverter;
