import styled from "styled-components";

export const StyledH1 = styled.h1`
  color: ${(props) => props.theme.darkGrey};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize32};
  font-family: "AlegreyaSansLight";
  text-decoration: underline;
  margin: calc(${(props) => props.theme.bigGrout} * 3);
  margin-bottom: 0;
`;
