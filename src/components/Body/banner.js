import React from "react";
import bannerPath from "../../img/BTMT_Banner.png";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

function Banner() {
  return (
    <div>
      <Img src={bannerPath}></Img>
    </div>
  );
}

export default Banner;
