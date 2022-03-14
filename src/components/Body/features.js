import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Div = styled.div`
  width: 1320px;
  height: 640px;
  margin: 0 auto;
`;

const InnerDiv = styled.div`
  display: flex;
  /* border: 1px solid red; */
  justify-content: center;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 98px;
  margin-bottom: 40px;
  margin: 80px 0px;
`;

const ContentsDiv = styled.div`
  position: relative;
  width: 375px;
  height: 476px;

  background: #24252a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

const Dl = styled.dl`
  /* border: 1px solid blue; */
  /* background-color: #24252a; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;

  position: absolute;
  width: 312px;
  height: 380px;
  left: 32px;
  top: 56px;
`;

const Dt = styled.dt`
  position: static;
  width: 312px;
  height: 64px;
  left: 0px;
  top: 0px;
  margin-top: 32px;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */

  color: #66666a;
`;

const Dd = styled.dd`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */

  color: #66666a;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 24px 0px;
`;

const Img = styled.img`
  position: static;
  width: 79.69px;
  height: 80px;
  left: 0px;
  top: 0px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 32px 0px;
`;

const StlyedSlider = styled(Slider)`
  .slick-list {
    width: 1320px;
    margin: 0 auto;
  }
`;

function FeaturesItme({ data }) {
  return (
    <ContentsDiv>
      <Dl>
        <Img src={data.img} alt="BTMT Features Images"></Img>
        <Dt>{data.title}</Dt>
        <Dd>{data.descriptions}</Dd>
      </Dl>
    </ContentsDiv>
  );
}

function FeaturesList() {
  const featuresItems = [
    {
      img: "assets/BTMT_Features_serve_icon_1.svg",
      title: "Buy exclusive community NFT",
      descriptions:
        "You can buy or mint Bitman web 3.0 community NFT which is supported by Bitman community users. NFT holders can partipate in exclusive guilds and enjoy more information.",
    },
    {
      img: "assets/BTMT_Features_serve_icon_2.svg",
      title: "Incentives for users",
      descriptions:
        "BTMT is used for incentives for creators and contributors. The more users contribute for Bitman community, the more BTMT users will get.",
    },
    {
      img: "assets/BTMT_Features_serve_icon_3.svg",
      title: "Incentives for users",
      descriptions:
        "Users who own BTMT can participate in votes for internal policy of Bitman Web 3.0. Only BTMT holders can vote.",
    },
    {
      img: "assets/BTMT_Features_serve_icon_4.svg",
      title: "Incentives for users",
      descriptions:
        "BTMT is used for incentives for creators and contributors. The more users contribute for Bitman community, the more BTMT users will get.",
    },
    {
      img: "assets/BTMT_Features_serve_icon_5.svg",
      title: "Incentives for users",
      descriptions:
        "BTMT is used for incentives for creators and contributors. The more users contribute for Bitman community, the more BTMT users will get.",
    },
    {
      img: "assets/BTMT_Features_serve_icon_6.svg",
      title: "Staking & Earning",
      descriptions:
        "You can stake BTMT and earn more BTMT. Once more users stake BTMT in the staking vault of Bitman, it’s likely the price of BTMT can increase more.",
    },
    {
      img: "assets/BTMT_Features_serve_icon_7.svg",
      title: "Exclusive invstment chances",
      descriptions:
        "Users who own BTMT in their wallet can participate in the exclusive DISCORD community. Enjoy more valuable information, and maximize your investment opportunity.",
    },
  ];

  // function SampleArrows ({
  //   const {className, }
  // })

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <Div
    // onMouseOver={(event) => {
    //   console.log(event.target.innerText);
    // }}
    >
      <H1>Features</H1>
      <InnerDiv>
        <StlyedSlider {...settings}>
          {featuresItems.map((features, index) => (
            <FeaturesItme data={features} key={index} />
          ))}
        </StlyedSlider>
      </InnerDiv>
    </Div>
  );
}

export default FeaturesList;
