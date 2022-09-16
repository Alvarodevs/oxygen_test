import styled from 'styled-components'

export const CardsContainer = styled.div`
    margin: auto;
    display: flex;
    width: 70%;
    height: 80vh;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 641px) {
        width: 100%;
        display: block;
    }
`

export const Card = styled.a`
    width: 95%;
    margin: 1rem;
    height: 40vh;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
`