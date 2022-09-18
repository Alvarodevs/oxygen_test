import styled from "styled-components";

export const CardBottomContainer = styled.div`
    width: 100%;
    height: 3rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFF;

    svg {
        margin-left: 1.5rem;
        stroke-width: 0.3;
        font-size: x-large;

        :hover {
            cursor: pointer;
        }
    }

    @media (max-width: 641px) {
    margin:0 0.5rem;
    width: 85%;
  }
`;

export const ResultContainer = styled.div`
    margin-right: 1rem;
    display: flex;
    align-items: center;
`

export const Result = styled.div`
    font-size: x-large;
    margin-right: 0.5rem;
`

export const ResultUnit = styled.div`
    font-size: smaller;
    
`