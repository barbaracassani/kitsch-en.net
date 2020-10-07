import React from "react";
import { StyledH1 } from "./H1.style";

function H1({ children }: { children: any }) {
  return <StyledH1>{children}</StyledH1>;
}

export default H1;
