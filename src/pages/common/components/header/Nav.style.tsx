import styled, { StyledComponent } from "styled-components";
import { breakpoints, fadeInAndEnter } from "../../../../App.style";
import IconBurger from "../svg/icon-burger.svg";

export interface Props {
  isMenuOpen: boolean;
}

export const StyledNav = styled.nav`
  color: ${(props) => props.theme.white};
  margin-right: ${(props) => props.theme.bigGrout};
  margin-bottom: ${(props) => props.theme.smallGrout};
  align-self: flex-end;
  @media ${breakpoints.small} {
    align-self: center;
    display: flex;
    flex-direction: column;
    margin-right: ${(props) => props.theme.mediumGrout};
  }
  font-size: ${(props) => props.theme.fontSize16};
  text-transform: uppercase;
  font-family: "AlegreyaSansThin";
`;

export const StyledNavSpan: StyledComponent<any, any> = styled.span`
  &:not(:last-child) {
    margin-right: ${(props) => props.theme.bigGrout};
    cursor: pointer;
  }

  &:first-of-type {
    @media ${breakpoints.small} {
      margin-top: 80px;
    }
  }

  @media ${breakpoints.small} {
    display: ${(props: any) => (props.isMenuVisible ? "block" : "none")};
    width: 100%;
    height: 40px;
    text-align: right;
    padding-right: 25px;
    transition: visibility 0.5s linear;
    ${fadeInAndEnter.bind(null, 0.3)}
  }

  & a:link,
  & a:active,
  & a:hover,
  & a:visited {
    color: ${(props) => props.theme.white};
    text-decoration: none;
  }
  & a.active {
    font-family: "AlegreyaSansLight";
  }
`;

export const StyledNavBurger = styled.div`
  display: none;
  cursor: pointer;
  width: 48px;
  height: 48px;
  position: absolute;
  right: 15px;
  top: 17px;
  background-image: url(${IconBurger});
  @media ${breakpoints.small} {
    display: block;
  }
`;
