import React from "react";
import styled from "styled-components";

import Banner from "./banner";
import Division from "./division";
import BitmanWeb from "./bitmanWeb";
import InfoList from "./infoList";
import FeaturesList from "./features";
import Community from "./community";
import TiresList from "./tiers";
import RoadmapList from "./roadmap";

const Div = styled.div`
  /* position: relative; */
  /* z-index: 3; */
  /* display: flex; */
`;

function Body() {
  return (
    <Div>
      <Banner />
      <Division />
      <BitmanWeb />
      <InfoList />
      <FeaturesList />
      <Community />
      <TiresList />
      {/* <RoadmapList /> */}
    </Div>
  );
}

export default Body;
