import styled from "styled-components";

export const CardContainer = styled.div`
  width: 60%;
  height: 193px;
  background-color: green;
  margin: auto;
  border-radius: 21px;
  background: #2e0039;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.2);

  @media (max-width: 641px) {
    width: 90%;
  }
`;

export const CardTitle = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  padding: 1rem 2rem;
`;

export const DataConversionContainer = styled.div`
  width: 95%;
  height: 4rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 641px) {
    width: 100%;
    display: block;
    justify-content: start;
    padding-left: 2rem;
  }
`;

export const SelectorAndIconContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  svg {
    color: #ffffff;
    stroke-width: 0.3;
    font-size: large;
    margin: 0.5rem 1rem 0 0.5rem;
    //margin-right: 1rem;
    :hover{
        cursor: pointer;
    }
  }
  @media (max-width: 641px) {
    width: 70%;
  }
`;

export const MeasuresSelector = styled.select`
  width: 80%;
  height: 2rem;
  margin-left: 0.5rem;
  color: #ffffff;
  background-color: inherit;
  border: none;
  border-bottom: 2px solid white;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 641px) {
    margin:0;
    width: 100%;
  }
`;

export const Options = styled.option`
    background-color: #2e0039;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    //font-weight: 100;
`

export const InputContainer = styled.div`
  width: 40%;
  display: flex;
  color: #FFF;
  align-items: center;
  @media (max-width: 641px) {
    width: 100%;
    margin: 0;
  }
`
export const AmountToConvertInput = styled.input`
    width: 80%;
    height: 2rem;
    margin-right: 0.5rem;
    background-color: transparent;
    color: #ffffff;
    text-align: end;
    border: none;
    border-bottom: 2px solid #ffffff;

    :active & :focus-visible {
        color: #ffffff;
        border-color: transparent;
    }

    @media (max-width: 641px) {
        width: 62%;
        margin: 0;
    }
`;
