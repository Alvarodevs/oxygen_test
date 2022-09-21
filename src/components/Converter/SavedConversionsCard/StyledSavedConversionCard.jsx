import styled from "styled-components";

export const MainContainer = styled.div`
    width: 60%;
    height: 40vh;
    color: #676767;
    margin: 4rem auto;

    @media (max-width: 641px) {
        width: 90%;
        margin: 2rem;
        display: block;
    }
`;

export const Title = styled.div`
    width: 100%  
`;

export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: space-between;
    
`;

export const SavedCard = styled.div`
    width: 45%;
    height: 3rem;
    background-color: yellow;
    margin-top: 1rem;
    background: #e3e3e3;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;

    @media (max-width: 641px) {
        width: 100%;
        margin: 0.5rem auto;
    }
    svg {
        color: #676767;
        font-size: x-large;
    }
`;