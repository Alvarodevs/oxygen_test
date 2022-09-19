import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 90%;
    height: 30vh;
    //background-color: red;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-self: center;

    @media (max-width: 641px) {
        width: 80%;
        padding-left: 2rem;
        margin-top: 6rem;
        flex-direction: column;
        flex-wrap: nowrap;
    }
`;