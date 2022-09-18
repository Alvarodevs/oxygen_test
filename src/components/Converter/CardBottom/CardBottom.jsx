import React from "react";
import {
    CardBottomContainer,
    Result,
    ResultContainer,
    ResultUnit,
} from "./StyledCardBottom";
import { BsHeart } from "react-icons/bs";
import PropTypes from "prop-types";

const CardBottom = ({ resultUnit, result }) => {
    return (
        <CardBottomContainer>
            <BsHeart />
            <ResultContainer>
                <Result>{result}</Result>
                <ResultUnit>{resultUnit}</ResultUnit>
            </ResultContainer>
        </CardBottomContainer>
    );
};

export default CardBottom;

CardBottom.propTypes = {
    resultUnit: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired
};
