import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 1320px;
  margin: 0 auto;
`;

const H1 = styled.div`
  position: static;
  width: 1283px;
  height: 98px;
  left: 18.5px;
  top: 0px;

  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 98px;
  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 80px 0px;
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
  background: linear-gradient(90deg, #00ffa3 0%, #003afe 100%);
  background-clip: text;
  color: transparent;
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
  /* position: absolute; */
  width: 300px;
  height: 300px;
  /* left: -90px; */
  border-radius: 50%;
  text-align: center;
  background-color: #00c8c8;
`;

function CommunityItem({ data }) {
  return (
    <Circle style={{ zIndex: data.index }}>
      <span>{data.title}</span>
      <p>{data.description}</p>
    </Circle>
  );
}

function Community() {
  const community = [
    {
      title: "Traders’",
      description: "Guild",
      index: 1,
    },
    {
      title: "NFT holers’",
      description: "Guild",
      index: 2,
    },
    {
      title: "DeFi investors’",
      description: "Guild",
      index: 3,
    },
    {
      title: "Writers’",
      description: "Guild",
      index: 4,
    },
    {
      title: "Researchers’",
      index: 5,
      description: "Guild",
    },
  ];
  return (
    <Div>
      <H1>Exclusive Guilds Communities</H1>
      <InnerDiv>
        {community.map((community) => (
          <CommunityItem data={community} />
        ))}
      </InnerDiv>
      <ButtonDiv>
        <Button>Join the exclusive communities</Button>
      </ButtonDiv>
    </Div>
  );
}

export default Community;
