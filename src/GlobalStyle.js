import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
    box-sizing: border-box;
    /* font-family: "Montserrat"; */

  }
  body{
    background-color: #000000;
    color : #fff;
    font-family: 'Montserrat';
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  /* input, button {

  } */
  div,a,span,p {
    /* font-family: 'Montserrat';   */
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    /* width: 100%;
    height: 100%; */
  }
`;

export default GlobalStyle;
