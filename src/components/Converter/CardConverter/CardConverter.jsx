import React from "react";
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
  return (
    <CardContainer>
      <CardTitle>convert</CardTitle>
      <DataConversionContainer>
        <SelectorAndIconContainer>
          <MeasuresSelector>
            <Options value="km" selected>
              {"km "} &rarr; {" miles"}
            </Options>
            <Options value="miles">
              {"miles  "} &rarr; {" km"}
            </Options>
            <Options value="feet">
              {"feet  "} &rarr; {" meters"}
            </Options>
            <Options value="meters">
              {"meters  "} &rarr; {" feet"}
            </Options>
            <Options value="cm">
              {"cm  "} &rarr; {" inches"}
            </Options>
            <Options value="inches">
              {"inches  "} &rarr; {" cm"}
            </Options>
          </MeasuresSelector>
          <BsArrowLeftRight />
        </SelectorAndIconContainer>

        <InputContainer>
          <AmountToConvertInput></AmountToConvertInput>
          km
        </InputContainer>
      </DataConversionContainer>
      <CardBottom />
    </CardContainer>
  );
};

export default CardConverter;
