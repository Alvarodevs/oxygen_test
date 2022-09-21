import React from 'react'
import {
    CardContainer,
    Title,
    CirclesSavedContainer,
    CircleSaved
} from "./StyledSavedPaletteCard";
import { RiDeleteBin6Line } from "react-icons/ri";

const SavedPaletteCard = () => {
  return (
      <CardContainer>
          <Title>
              title
              <RiDeleteBin6Line />
          </Title>
          <CirclesSavedContainer>
              <CircleSaved />
              <CircleSaved />
              <CircleSaved />
              <CircleSaved />
              <CircleSaved />
          </CirclesSavedContainer>
      </CardContainer>
  );
}

export default SavedPaletteCard;