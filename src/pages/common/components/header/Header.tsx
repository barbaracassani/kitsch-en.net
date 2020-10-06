import React from "react";
import { StyledHeader } from "./Header.style";

function Header({
  children,
}: {
  children?: JSX.Element[] | JSX.Element | null;
}) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
