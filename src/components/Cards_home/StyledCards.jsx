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

    & a {
        text-decoration: none;
        color: inherit;
        padding: 1rem;
    }

    @media (max-width: 641px) {
        margin: 0.5rem 0;
    }
`