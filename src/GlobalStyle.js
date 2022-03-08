import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
    box-sizing: border-box;
    font-family: "Montserrat";

  }
  body{
    background-color: #000000;
    color : #fff;
    /* font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; */
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  /* input, button {

  } */

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
