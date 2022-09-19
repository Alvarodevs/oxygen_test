import React from "react";
import { CirclesContainer, Circle } from "./StyledCircleColors";
import { AiOutlinePlus } from 'react-icons/ai'

const CircleColors = () => {
    return (
        <CirclesContainer>
            <Circle><AiOutlinePlus/></Circle>
            <Circle><AiOutlinePlus/></Circle>
            <Circle><AiOutlinePlus/></Circle>
            <Circle><AiOutlinePlus/></Circle>
            <Circle><AiOutlinePlus/></Circle>
        </CirclesContainer>
    );
};

export default CircleColors;
