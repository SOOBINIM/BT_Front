import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 1320px;
  margin: 0 auto;
`;

const H1 = styled.div`
  margin-top: 280px;
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 98px;
  color: #ffffff;
`;
// const Div = styled.div`
//   background: -webkit-linear-gradient(left, #00ffa3, #003afe);
//   background: -moz-linear-gradient(right, #00ffa3, #003afe);
//   background: -o-linear-gradient(right, #00ffa3, #003afe);
//   background: linear-gradient(to right, #00ffa3, #003afe);
//   background-clip: text;
//   display: flex;

//   /* color: transparent; */
// `;

const InnerDiv = styled.div`
  display: flex;
  margin: 80px 0px;

  /* background-clip: text; */
  /* color: transparent; */
  /* :nth-child( */
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
`;

const Button = styled.button`
  background-color: #00fff0;
  border-radius: 40px;
  padding: 19px, 66px;

  border: 1px solid #00fff0;
  box-sizing: border-box;
  border-radius: 40px;

  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  width: 493px;
  height: 67px;
`;

const Circle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: linear-gradient(90deg, #00ffa3 0%, #003afe 100%); */

  margin: 0;
  padding: 0;

  width: 300px;
  height: 300px;
  /* left: -90px; */
  border-radius: 50%;
  text-align: center;
  /* background-color: #00c8c8; */
  &:nth-of-type(1) {
    background: linear-gradient(to right, #00ffa3, #01d3b8);
  }
  &:nth-of-type(2) {
    background: linear-gradient(to right, #01d9b5, #01adc9);
  }
  &:nth-of-type(3) {
    background: linear-gradient(to right, #01b3c7, #0187db);
  }
  &:nth-of-type(4) {
    background: linear-gradient(to right, #018dd8, #0161ed);
  }
  &:nth-of-type(5) {
    background: linear-gradient(to right, #0167ea, #003afe);
  }
`;

const Span = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 40px;

  text-align: center;
`;

const P = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 40px;
`;

function CommunityItem({ data }) {
  return (
    <Circle style={{ zIndex: data.index }}>
      <Span>{data.title}</Span>
      <P>{data.description}</P>
    </Circle>
  );
}

function Community() {
  const community = [
    {
      title: "Traders’",
      description: "Guild",
    },
    {
      title: "NFT holers’",
      description: "Guild",
    },
    {
      title: "DeFi investors’",
      description: "Guild",
    },
    {
      title: "Writers’",
      description: "Guild",
    },
    {
      title: "Researchers’",
      description: "Guild",
    },
  ];
  return (
    <Div>
      <H1>Exclusive Guilds Communities</H1>
      <InnerDiv>
        {community.map((community, index) => (
          <CommunityItem data={community} key={index} />
        ))}
      </InnerDiv>
      <ButtonDiv>
        <Button>Join the exclusive communities</Button>
      </ButtonDiv>
    </Div>
  );
}

export default Community;
