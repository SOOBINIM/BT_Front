import React from "react";
import styled from "styled-components";

import Banner from "./banner";
import Division from "./division";
import BitmanWeb from "./bitmanWeb";

const Div = styled.div`
  /* display: flex; */
`;

function Body() {
  return (
    <Div>
      <Banner />
      <Division />
      <BitmanWeb />
    </Div>
  );
}

export default Body;
