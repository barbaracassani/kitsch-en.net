import React from "react";
import { StyledFooter } from "./Footer.style";

function Footer({
  children,
}: {
  children?: JSX.Element[] | JSX.Element | null;
}) {
  return <StyledFooter>{children}</StyledFooter>;
}

export default Footer;
