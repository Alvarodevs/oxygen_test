import styled from "styled-components";

export const CirclesContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0;
    @media (max-width: 641px) {
        display: flex;
        justify-content: space-evenly;
        margin: 0 0.5rem;
        padding-top: 3rem;
    }

`;

export const Circle = styled.div`
    width: 73px;
    height: 73px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin: 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(4, 4, 4);
    background: linear-gradient(
        140deg,
        rgba(4, 4, 4, 0.8631827731092436) 10%,
        rgba(176, 176, 176, 1) 20%,
        rgba(4, 4, 4, 1) 30%,
        rgba(176, 176, 176, 1) 40%,
        rgba(0, 0, 0, 1) 50%,
        rgba(176, 176, 176, 1) 60%,
        rgba(0, 0, 0, 1) 70%,
        rgba(176, 176, 176, 1) 80%,
        rgba(4, 4, 4, 1) 90%
    );

    @media (max-width: 740px) {
        width: 50px;
        height: 50px;
    }

    :hover {
        width: 80px;
        height: 80px;
        transition: 0.2s ease-in-out;

        @media (max-width: 740px) {
            width: 50px;
            height: 50px;
            :hover {
                width: 60px;
                height: 60px;
            }
        }
    }

    svg{
        font-size: 3rem;
        color: #fff;

    }
`;