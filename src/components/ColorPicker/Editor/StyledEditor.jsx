import styled from "styled-components";

export const EditorContainer = styled.div`
    width: 120%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-self: center;
    margin-top: 0.5rem;

    @media (max-width: 641px) {
        width: 90%;
        height: 70vh;
        flex-direction: column;
        align-content: center;
    }
`;

export const PickerBox = styled.div`
    width: 47%;
    height: 100%;
    padding: 0.5rem;
    @media (max-width: 641px) {
        width: 100%;
        margin-top: 1rem;
    }
`;

export const NameBox = styled.div`
    width: 47%;
    height: 100%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    flex-direction: column;

    @media (max-width: 641px) {
        width: 100%;
        height: 40vh;
        margin-top: 1rem;
    }
`;

export const TitleName = styled.div`
    width: 100%;
    height: 40%;
    margin-bottom: 0;
    display: flex;
    align-items: flex-end;
`;

export const InputButtonContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const InputName = styled.input`
    width: 70%;
    height: 50%;
    background-color: transparent;
    border-radius: 9px;
    border: 4px solid #fff;

    /* :focus-visible{
        border: 4px solid #FFF;
    } */
`;

export const AddButton = styled.button`
    width: 20%;
    height: 60%;
    background-color: #fff;
    border-radius: 9px;
    border: 4px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        font-size: 2rem;
    }
`;
