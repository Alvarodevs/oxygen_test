import React from "react";
import { Link } from "react-router-dom";
import { Card, CardsContainer } from "./StyledCards";

export const CardsHome = () => {
  return (
    <CardsContainer>
      <Card>
        <Link to={"/conversor"}>CONVERSOR CARD</Link>
      </Card>

      <Card>
        <Link to={"/color_picker"}>COLOR PICKER CARD</Link>
      </Card>
    </CardsContainer>
  );
};

export default CardsHome;
