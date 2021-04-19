import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  z-index: 2;
  font-size: ${(props) => props.theme.fontSize10};
  padding: ${(props) => props.theme.mediumGrout};
  p {
    padding: 0;
    margin: 0;
  }
`;
