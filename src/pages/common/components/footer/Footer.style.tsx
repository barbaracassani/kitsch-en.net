import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: sticky;
  bottom: 0;
  z-index: 2;
  font-size: ${(props) => props.theme.fontSize10};
  padding: ${(props) => props.theme.mediumGrout};
  p {
    padding: 0;
    margin: 0;
  }
`;
