import React from "react";
import { StyledImage } from "./Image.style";
const Image = () => {
  return (
    <StyledImage>
      <source
        media="(min-width:650px)"
        srcSet="sam-albury-oA7MMRxTVzo-unsplash.jpg"
      />
      <source
        media="(min-width:465px)"
        srcSet="sam-albury-oA7MMRxTVzo-unsplash.jpg"
      />
      <img src="sam-albury-oA7MMRxTVzo-unsplash.jpg" alt="Keyboard" />
    </StyledImage>
  );
};
export default Image;
