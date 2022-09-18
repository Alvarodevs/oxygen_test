import React, { useState, useEffect } from "react";
import { HomeHeader, ConversorHeader, ColorPickerHeader, HeaderContainer } from "./StyledHeader";
import { useLocation } from "react-router-dom";
import { BsArrowLeftRight } from 'react-icons/bs';
import { MdOutlinePalette } from 'react-icons/md';

export const Header = () => {
    
  const [headerTitle, setHeaderTitle] = useState("Choose an app to check");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setHeaderTitle("Choose an app to check");
    } else if (location.pathname === "/conversor") {
      setHeaderTitle("unit converter");
    } else if (location.pathname === "/color_picker") {
      setHeaderTitle("Color palette generator");
    }
  }, [location]);

  return (
    //Change for switch?
    <HeaderContainer>
      {headerTitle.includes("Choose") && (
        <HomeHeader>
          {headerTitle}
        </HomeHeader>
      )}
      {headerTitle.includes("unit") && (
        <ConversorHeader>
            <BsArrowLeftRight/>
            {headerTitle}
        </ConversorHeader>
      )}
      {headerTitle.includes("Color") && (
        <ColorPickerHeader>
            <MdOutlinePalette/>
            {headerTitle}
        </ColorPickerHeader>
      )}
    </HeaderContainer>
  );
};

export default Header;
