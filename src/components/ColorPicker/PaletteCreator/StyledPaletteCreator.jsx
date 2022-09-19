import styled from "styled-components";

export const PaletteCreatorContainer = styled.div`
    width: 60%;
    height: 40vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-self: center;

    @media (max-width: 641px) {
        width: 90%;
        margin-top: 3rem;
    }
`;