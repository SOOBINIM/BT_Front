import React from "react";
import styled from "styled-components";

const OuterDiv = styled.div`
  width: 1320px;
  margin: 0 auto;
  padding: 280px 0;
`;

const InnerDiv = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 44px 12px;
`;

const PartnersDiv = styled.div`
  /* margin-top: 8px; */
  width: 322px;
  height: 120px;

  background: #151e2f;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 98px;
  margin-bottom: 40px;
  margin: 80px 0px;
`;

const Img = styled.img`
  /* display: inline; */
  margin: 0px auto;
  height: 50%;
  /* text-align: center; */
  /* min-height: 123px; */

  /* height: 100%; */
  /* width: 322px;
  height: 120px; */
`;

function PartnersItem({ data }) {
  return (
    <PartnersDiv>
      {data.title}
      <Img src={data.src}></Img>
    </PartnersDiv>
  );
}

function PartnersList() {
  const PartnersItems = [
    {
      src: "assets/BTMT_Partners1.png",
    },
    {
      src: "assets/BTMT_Partners2.png",
    },
    {
      src: "assets/BTMT_Partners3.png",
    },
    {
      src: "assets/BTMT_Partners4.png",
    },
    {
      src: "assets/BTMT_Partners5.png",
    },
    {
      src: "assets/BTMT_Partners6.png",
    },
    {
      src: "assets/BTMT_Partners7.png",
    },
    {
      src: "assets/BTMT_Partners8.png",
    },
    {
      src: "assets/BTMT_Partners9.png",
    },
    {
      src: "assets/BTMT_Partners10.png",
    },
    {
      src: "assets/BTMT_Partners11.png",
    },
    {
      src: "assets/BTMT_Partners12.png",
    },
    {
      src: "assets/BTMT_Partners13.png",
    },
    {
      src: "assets/BTMT_Partners14.png",
    },
    {
      src: "assets/BTMT_Partners15.png",
    },
    {
      src: "assets/BTMT_Partners16.png",
    },
  ];

  return (
    <OuterDiv>
      <H1>Partners</H1>

      <InnerDiv>
        {PartnersItems.map((data, index) => (
          <PartnersItem data={data} key={index} />
        ))}
      </InnerDiv>
    </OuterDiv>
  );
}

export default PartnersList;
