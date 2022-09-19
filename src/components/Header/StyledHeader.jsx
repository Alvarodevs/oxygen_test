import styled from 'styled-components'


export const HeaderContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin: auto;
    display: flex;
    justify-content: center;
`
export const HomeHeader = styled.div`
    margin: auto;
    display: flex;
    width: 100%;
    height: 10vh;
    justify-content: center;
    align-items: center;
    color: blue;
    /* @media (max-width: 641px) {
        width: 100%;
        display: block;
    } */
`

export const ConversorHeader = styled.div`
    display: flex;
    width: 100%;
    height: 7vh;
    padding-right: 45%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    color: #2E0039;
    font-size: 1.5rem;

    @media (max-width: 641px) {
        padding-left: 0.5rem;
        justify-content: start;
    }

    svg {
        margin-right: 0.5rem;
        stroke-width: 0.3;
        font-size: smaller;
    }
`

export const ColorPickerHeader = styled.div`
    margin: auto;
    display: flex;
    width: 100%;
    height: 7vh;
    padding-top: 1rem;
    justify-content: center;
    align-items: center;
    background-color: #2c2c2c;
    color: #ffffff;
    font-size: 2rem;

    @media (max-width: 641px) {
        width: 100%;
        font-size: 1.5rem;
    }

    svg {
        border: #2c2c2c;
        margin-right: 1rem;
        stroke: transparent;
        stroke-width: 0.3;
        font-size: larger;
    }
`;