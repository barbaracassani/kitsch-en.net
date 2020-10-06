import React from "react";
import Header from "../common/components/header/Header";
import Logo from "../common/components/header/Logo";
import Nav from "../common/components/header/Nav";
import Image from "../common/components/image/Image";
import { StyledMain } from "./Main.style";

export const MainLayout = (props: { children: any }) => {
  return (
    <StyledMain>
      <Header>
        <Logo />
        <Nav />
      </Header>
      <div className="content">
        <Image />
        <div className="dynamicContent">{props.children}</div>
      </div>
    </StyledMain>
  );
};
