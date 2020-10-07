import styled from "styled-components";

export const StyledPost = styled.article`
  margin: calc(${(props) => props.theme.bigGrout} * 3);
  &:first-of-type {
    margin-top: 0;
  }
  .date {
    font-style: italic;
    letter-spacing: 2px;
  }
  div p {
    line-height: 1.5;
  }
  div p::first-letter {
    font-size: 300%;
    float: left;
    margin-right: ${(props) => props.theme.smallGrout};
    margin-top: 0;
    margin-bottom: -10px;
    padding: 0;
    line-height: 1;
    color: ${(props) => props.theme.red};
  }
`;
