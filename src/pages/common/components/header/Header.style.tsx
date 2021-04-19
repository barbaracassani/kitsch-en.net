import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.pink};
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 2;
`;
