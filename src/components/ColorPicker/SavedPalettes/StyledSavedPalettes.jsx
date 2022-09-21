import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 90%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-self: center;

    @media (max-width: 641px) {
        width: 100%;
        height: fit-content;
        margin-top: 2rem;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
    }
`;