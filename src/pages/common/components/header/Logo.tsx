import React from "react";
import { StyledLogo } from "./Logo.style";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <StyledLogo>
      <Link to="/">kitsch-en.net</Link>
    </StyledLogo>
  );
}

export default Logo;
