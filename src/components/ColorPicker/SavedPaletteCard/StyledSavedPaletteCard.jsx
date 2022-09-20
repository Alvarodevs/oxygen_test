import styled from "styled-components";

export const CardContainer = styled.div`
    width: 30%;
    height: 15vh;
    
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 641px) {
        width: 80%;
        height: 10vh;
        margin: 1.5rem 0 0.3rem 0;
    }
`;

export const Title = styled.div`
    width: 95%;
    height: 30%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 0.2rem 0.2rem;
    //padding: 0 1rem;
`;

export const CirclesSavedContainer = styled.div`
    width: 100%;
    height: 70%;
    border-radius: 10px;
    background-color: #000;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 770px) {
        height: 70%;
    }

    @media (max-width: 641px) {
        width: 95%;
        height: 100%;
        justify-content: space-around;
        align-self: flex-start;
    }

    @media (max-width: 320px) {
        height: 80%;
    }
`;

export const CircleSaved = styled.div`
    width: 12%;
    height: 55%;
    border-radius: 50%;
    border: 2px solid #fff;

    @media (max-width: 940px) {
        width: 14%;
    }

    @media (max-width: 890px) {
        height: 45%;
    }

    @media (max-width: 770px) {
        width: 14%;
        height: 45%;
    }

    @media (max-width: 690px) {
        height: 40%;
    }

    @media (max-width: 641px) {
        width: 10%;
        height: 50%;
    }

    @media (max-width: 430px) {
        height: 40%;
    }

    @media (max-width: 320px) {
        width: 10%;
        height: 40%;
    }
`;