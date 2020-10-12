import styled from "styled-components";
import { fadeIn } from "../../../App.style";

export const StyledPost = styled.article`
  ${fadeIn.bind(null, 0.3)}
  margin: calc(${(props) => props.theme.bigGrout} * 3);
  &:first-of-type {
    margin-top: 0;
  }
  a:link,
  a:visited,
  a:active,
  a:hover {
    text-decoration: none;
    color: ${(props) => props.theme.black};
  }
  .date {
    font-style: italic;
    letter-spacing: 2px;
  }
  div p {
    line-height: 1.5;
  }
  div p:first-of-type:first-letter {
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
