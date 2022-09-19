import React from "react";
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

const Editor = () => {
    return (
        <EditorContainer className="EDITORCONT">
            <PickerBox>Picker</PickerBox>
            <NameBox>
                <TitleName>Name</TitleName>
                <InputButtonContainer>
                    <InputName />
                    <AddButton>
                        <AiOutlinePlus/>
                    </AddButton>
                </InputButtonContainer>
            </NameBox>
        </EditorContainer>
    );
};

export default Editor;
