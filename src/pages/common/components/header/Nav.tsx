import React, { useState } from "react";
import { StyledNav, StyledNavBurger, StyledNavSpan } from "./Nav.style";
import { NavLink } from "react-router-dom";

function Nav() {
  const [menuState, toggleMenu] = useState(false);
  return (
    <StyledNav>
      <StyledNavBurger
        onClick={() => {
          toggleMenu(!menuState);
        }}
      />
      <StyledNavSpan isMenuVisible={menuState}>
        <NavLink
          onClick={() => {
            toggleMenu(!menuState);
          }}
          to="/about"
        >
          About
        </NavLink>
      </StyledNavSpan>
      <StyledNavSpan isMenuVisible={menuState}>
        <NavLink
          onClick={() => {
            toggleMenu(!menuState);
          }}
          to="/blog"
        >
          Blog
        </NavLink>
      </StyledNavSpan>
    </StyledNav>
  );
}

export default Nav;
