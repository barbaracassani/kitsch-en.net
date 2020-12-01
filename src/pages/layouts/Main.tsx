import React from "react";
import Header from "../common/components/header/Header";
import Logo from "../common/components/header/Logo";
import Nav from "../common/components/header/Nav";
import Image from "../common/components/image/Image";
import { StyledMain } from "./Main.style";
import Footer from "../common/components/footer/Footer";

export const MainLayout = (props: { children: any }) => {
  return (
    <StyledMain>
      <div className="content">
        <Image />
        <div className="dynamicContent">
          <Header>
            <Logo />
            <Nav />
          </Header>
          {props.children}
          <Footer>
            <p>
              kitsch-en.net ltd - Registered Address: 2 Stamford Square, London
              SW15 2BF - ltd Registration Number: 8240156 - ltd VAT Registration
              Number: 151 7537 56
            </p>
          </Footer>
        </div>
      </div>
    </StyledMain>
  );
};
