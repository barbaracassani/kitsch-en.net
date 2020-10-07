import styled, { StyledComponent } from "styled-components";

export const StyledMain: StyledComponent<any, any> = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "AlegreyaSansThin";
  }
  p,
  span {
    font-family: "NunitoRegular";
  }
  .content {
    display: flex;
  }
  .dynamicContent {
    width: 50vw;
  }
`;
