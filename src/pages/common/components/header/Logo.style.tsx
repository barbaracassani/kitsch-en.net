import styled from "styled-components";

export const StyledLogo = styled.div`
  color: ${(props) => props.theme.white};
  & a:link,
  & a:active,
  & a:visited {
    color: ${(props) => props.theme.white};
    text-decoration: none;
  }
  text-transform: uppercase;
  margin-left: ${(props) => props.theme.smallGrout};
  margin-top: ${(props) => props.theme.smallGrout};
  margin-bottom: ${(props) => props.theme.smallGrout};
  font-family: "AlegreyaSansThin";
  font-size: ${(props) => props.theme.fontSize32};
`;
