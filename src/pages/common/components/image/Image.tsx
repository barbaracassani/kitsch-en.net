import React from "react";
import { StyledImage } from "./Image.style";
const Image = () => {
  return (
    <StyledImage>
      <source media="(min-width:650px)" srcSet="IMAG0698.jpg" />
      <source media="(min-width:465px)" srcSet="IMAG0698.jpg" />
      <img src="IMAG0698.jpg" alt="Bat" />
    </StyledImage>
  );
};
export default Image;
