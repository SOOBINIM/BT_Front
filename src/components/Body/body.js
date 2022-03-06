import React from "react";
import styled from "styled-components";

import Banner from "./banner";
import Division from "./division";
import BitmanWeb from "./bitmanWeb";
import InfoList from "./infoList";

const Div = styled.div`
  /* display: flex; */
`;

function Body() {
  return (
    <Div>
      <Banner />
      <Division />
      <BitmanWeb />
      <InfoList />
    </Div>
  );
}

export default Body;
