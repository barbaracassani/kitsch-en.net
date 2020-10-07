import styled, { StyledComponent } from "styled-components";

export const StyledImage: StyledComponent<any, any> = styled.picture`
  min-height: 100vh;
  width: 50vw;
  position: relative;
  img {
    min-height: 100vh;
    width: 50vw;
    position: fixed;
  }
`;
