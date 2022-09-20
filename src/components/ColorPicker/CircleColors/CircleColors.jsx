import React, { useState } from "react";
import { CirclesContainer, Circle } from "./StyledCircleColors";
import { AiOutlinePlus } from "react-icons/ai";
import PropTypes from "prop-types";

const CircleColors = ({hexColor}) => {
    const initialActiveState = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    };

    const [isActive, setIsActive] = useState(initialActiveState);

    const handleIsActive = (number) => {
        if (number === 1) {
            setIsActive(() => ({
                ...initialActiveState,
                1: true,
            }));
        } else if (number === 2) {
            setIsActive(() => ({
                ...initialActiveState,
                2: true,
            }));
        } else if (number === 3) {
            setIsActive(() => ({
                ...initialActiveState,
                3: true,
            }));
        } else if (number === 4) {
            setIsActive(() => ({
                ...initialActiveState,
                4: true,
            }));
        } else if (number === 5) {
            setIsActive(() => ({
                ...initialActiveState,
                5: true,
            }));
        }
    };

    return (
        <CirclesContainer>
            <Circle active={isActive[1]} hexColor={hexColor} onClick={() => handleIsActive(1)}>
                <AiOutlinePlus />
            </Circle>
            <Circle active={isActive[2]} hexColor={hexColor} onClick={() => handleIsActive(2)}>
                <AiOutlinePlus />
            </Circle>
            <Circle active={isActive[3]} hexColor={hexColor} onClick={() => handleIsActive(3)}>
                <AiOutlinePlus />
            </Circle>
            <Circle active={isActive[4]} hexColor={hexColor} onClick={() => handleIsActive(4)}>
                <AiOutlinePlus />
            </Circle>
            <Circle active={isActive[5]} hexColor={hexColor} onClick={() => handleIsActive(5)}>
                <AiOutlinePlus />
            </Circle>
        </CirclesContainer>
    );
};

export default CircleColors;

CircleColors.PropTypes = {
    hexColor: PropTypes.string.isRequired
}