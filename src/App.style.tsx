import { createGlobalStyle, InterpolationFunction } from "styled-components";
import AlegreyaSansThin from "./assets/fonts/AlegreyaSansSC-Thin.woff";
import AlegreyaSansLight from "./assets/fonts/AlegreyaSansSC-Light.woff";
import NunitoLight from "./assets/fonts/Nunito-Light.woff";
import NunitoRegular from "./assets/fonts/Nunito-Regular.woff";

export const theme = {
  smallGrout: "5px",
  mediumGrout: "13px",
  mediumBigGrout: "18px",
  bigGrout: "37px",

  fontSize10: ".65rem",
  fontSize14: ".9rem",
  fontSize16: "1rem",
  fontSize18: "1.1rem",
  fontSize24: "1.4rem",
  fontSize26: "1.5rem",
  fontSize28: "1.6rem",
  fontSize30: "1.90rem",
  fontSize32: "2rem",

  basicShadow: "2px 2px 10px #8b8b8b",
};

export const splitBorder = (props: any) => `
    border-right: 2px solid ${props.lightTheme.mediumGrey};
    content: '';
    display: block;
    position: absolute;
    right: 0px;
    top: 10%;
    height: 80%;
    width: 1px;
    opacity: 0.4;
`;
export const splitBorderHorizontal = (props: any) => `
    border-top: 2px solid ${props.lightTheme.mediumGrey};
    content: '';
    display: block;
    position: absolute;
    left: ${props.lightTheme.bigGrout};
    top: 0;
    height: 1px;
    width: calc(100% - ${props.lightTheme.bigGrout} * 2);
    opacity: 0.4;
`;

export const fadeIn: InterpolationFunction<any> = (speed?: number) => `
  animation: ease-in fadein ${speed || 1}s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const fadeInAndEnter: InterpolationFunction<any> = (speed?: number) => `
  animation: fadeinandslide ${speed || 1}s;
  @keyframes fadeinandslide {
    from {
      opacity: 0;
      transform: translateX(3em);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
export const fadeOutAndLeave: InterpolationFunction<any> = (speed?: number) => `
  animation: fadeoutandslide ${speed || 1}s;
  @keyframes fadeoutandslide {  
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(3em);
    }
  }
`;

export const breakpoints = {
  smallAndMedium: "(max-width: 1030px)",
  small: "(max-width: 650px)",
  big: "(min-width: 1031px)",
};

export const margin25 = (props: any) => `
  margin-left: calc(${props.lightTheme.bigGrout} * 2.5);
  @media ${breakpoints.smallAndMedium} { 
     margin-left: ${props.lightTheme.bigGrout};
  }
  @media ${breakpoints.small} { 
     margin-left: ${props.lightTheme.smallGrout};
  }
`;
export const margin35 = (props: any) => `
  margin-left: calc(${props.lightTheme.bigGrout} * 3.5);
  @media ${breakpoints.smallAndMedium} { 
     margin-left: ${props.lightTheme.bigGrout};
  }
  @media ${breakpoints.small} { 
     margin-left: ${props.lightTheme.smallGrout};
  }
`;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: AlegreyaSansThin;
    src: url(${AlegreyaSansThin})
  }
  @font-face {
    font-family: AlegreyaSansLight;
    src: url(${AlegreyaSansLight})
  }
  @font-face {
    font-family: NunitoLight;
    src: url(${NunitoLight})
  }
  @font-face {
    font-family: NunitoRegular;
    src: url(${NunitoRegular})
  }
  .content-align-right {
    display: flex;
    justify-content: flex-end; 
  }
  ul {
    list-style-type: none;
    padding-inline-start: 0;
    line-height: 2rem;
  }
`;

export const lightTheme = {
  ...theme,
  white: "#eeeeee",
  black: "#000000",
  lightGrey: "#eaeaea",
  mediumGrey: "#8b8b8b",
  green: "#52b843",
  lightGreen: "#D4F7CB",
  blue: "#4A90E2",
  lightBlue: "#d5e5f7",
  yellow: "#f2af00",
  red: "#ef532c",
  pink: '#f00293'
};
