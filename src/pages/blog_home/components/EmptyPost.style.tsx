import styled from "styled-components";

export const StyledEmptyPost = styled.article`
  margin: calc(${(props) => props.theme.bigGrout} * 3);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  &:first-of-type {
    margin-top: 0;
  }
`;
