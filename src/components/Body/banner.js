import React from "react";
import styled from "styled-components";

const Video = styled.video`
  width: 100%;
  height: 100%;
`;

function Banner() {
  return (
    <div>
      <Video autoPlay loop>
        <source src="assets/BTMTWebMain.mp4" type="video/mp4" />
      </Video>
    </div>
  );
}

export default Banner;
