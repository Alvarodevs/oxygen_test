import React from "react";
import PropTypes from "prop-types";
import {
    EditorContainer,
    PickerBox,
    NameBox,
    InputName,
    AddButton,
    TitleName,
    InputButtonContainer,
} from "./StyledEditor";
import { AiOutlinePlus } from "react-icons/ai";
import {CompactPicker} from 'react-color';

const Editor = ({ handleColorToCircles }) => {

    const handleColor = (color, event) => {
        handleColorToCircles(color);
    };

    return (
        <EditorContainer>
            <PickerBox>
                <CompactPicker onChange={handleColor} />
            </PickerBox>
            <NameBox>
                <TitleName>Name</TitleName>
                <InputButtonContainer>
                    <InputName />
                    <AddButton>
                        <AiOutlinePlus />
                    </AddButton>
                </InputButtonContainer>
            </NameBox>
        </EditorContainer>
    );
};

export default Editor;

Editor.PropTypes = {
    handleColorToCircles: PropTypes.func,
};