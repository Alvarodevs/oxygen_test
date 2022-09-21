import styled from 'styled-components'

export const CardsContainer = styled.div`
    margin: auto;
    display: flex;
    width: 80%;
    height: 80vh;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 641px) {
        width: 100%;
        display: block;
    }
`

export const Card = styled.div`
    width: 100%;
    margin: 1rem;
    height: 40vh;
    background-color: aliceblue;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0d43d8;
    font-size: 2rem;
    transition: 0.2s ease-in-out;
    & a {
        text-decoration: none;
        color: inherit;
        padding: 1rem;
    }

    :hover {
        background-color: #0d43d8;
        color: aliceblue;
        box-shadow: 0px 0px 8px 3px rgba(2, 72, 163, 0.2);
    }

    @media (max-width: 641px) {
        margin: 0.5rem 0;
    }
`;