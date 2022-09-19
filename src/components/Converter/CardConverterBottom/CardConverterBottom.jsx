import React from "react";
import {
    CardBottomContainer,
    Result,
    ResultContainer,
    ResultUnit,
} from "./StyledCardConverterBottom";
import { BsHeart } from "react-icons/bs";
import PropTypes from "prop-types";

const CardBottom = ({ resultUnit, result, saveData }) => {

    return (
        <CardBottomContainer>
            <BsHeart onClick={saveData} />
            <ResultContainer>
                <Result>{Math.round(result * 100) / 100}</Result>
                <ResultUnit>{resultUnit}</ResultUnit>
            </ResultContainer>
        </CardBottomContainer>
    );
};

export default CardBottom;

CardBottom.propTypes = {
    resultUnit: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    saveData: PropTypes.func.isRequired
};
