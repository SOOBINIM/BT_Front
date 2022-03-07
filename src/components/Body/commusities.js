import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background: -webkit-linear-gradient(left, #00ffa3, #003afe);
  background: -moz-linear-gradient(right, #00ffa3, #003afe);
  background: -o-linear-gradient(right, #00ffa3, #003afe);
  background: linear-gradient(to right, #00ffa3, #003afe);
  background-clip: text;
  /* position: relative; */
  display: flex;

  /* color: transparent; */
`;

const Button = styled.button`
  background-color: #00fff0;
  border-radius: 40px;
  padding: 19px, 66px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Circle = styled.div`
  /* position: absolute; */
  width: 300px;
  height: 300px;
  border-radius: 50%;
  text-align: center;
  background-color: #00c8c8;
  /* opacity: 0.7; */
  /* color: transparent; */

  line-height: 110px;
`;

function CommunityItem({ data }) {
  return (
    <Circle>
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
    <div>
      <h1>Exclusive Guilds Communities</h1>
      <Div>
        {community.map((community) => (
          <CommunityItem data={community} />
        ))}
      </Div>
      <Button>Join the exclusive communities</Button>
    </div>
  );
}

export default Community;
