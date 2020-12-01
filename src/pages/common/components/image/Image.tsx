import React from "react";
import { StyledImage } from "./Image.style";
import images from "../../../../assets/images/gallery";

const Image = () => {
  const img = images[0];
  return (
    <StyledImage>
      <source media="(min-width:650px)" srcSet={img.src} />
      <source media="(min-width:465px)" srcSet={img.src} />
      <img src={img.src} alt="Keyboard" title={img.alt} />
    </StyledImage>
  );
};
export default Image;
