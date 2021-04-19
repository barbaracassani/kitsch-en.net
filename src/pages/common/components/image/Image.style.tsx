import styled, { StyledComponent } from "styled-components";
import {breakpoints} from '../../../../App.style';

export const StyledImage: StyledComponent<any, any> = styled.picture`
  min-height: 100vh;
  width: 50vw;
  position: relative;
  img {
    min-height: 100vh;
    width: 50vw;
    position: fixed;
  }
  @media ${breakpoints.smallAndMedium} { 
     display: none;
  }
`;
