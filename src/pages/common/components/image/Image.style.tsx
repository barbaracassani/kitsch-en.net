import styled, { StyledComponent } from "styled-components";

export const StyledImage: StyledComponent<any, any> = styled.picture`
  min-height: 100vh;
  width: 50vw;
  img {
    min-height: 100vh;
    width: 50vw;
  }
`;
