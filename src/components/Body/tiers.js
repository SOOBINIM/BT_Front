import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
`;

function TiresItem({ data }) {
  return (
    <dl>
      <dt>{data.title}</dt>
      <dd>{data.status}</dd>
      <dd>{data.descriptions}</dd>
    </dl>
  );
}

function TiresList() {
  const tireItems = [
    {
      title: "One Star",
      status: "HODL 100 BTMT",
      description: "You can join the Web3.0 BITMAN Discord community",
    },
    {
      title: "Benefits",
      status: [
        "HODL 100 BTMT",
        "Research and Content",
        "Research and Content",
        "Contribution Rewards",
        "Make Governance Proposals",
      ],
      description: [
        "ou can join the Web3.0 BITMAN Discord community",
        "You will be able to enjoy research articles and content provided by BITMAN users and BITMAN Influencers.",
        "You will be able to enjoy research articles and content provided by BITMAN users and BITMAN Influencers.",
        "If you post articles and share your own ideas to the community,you will have chances to get rewards.",
        "As a member of Web3.0 BITMAN community, you can propose and suggest your novel ideas and vision to the",
      ],
    },
    {
      title: "Two Stars",
      status: "HODL 500 BTMT",

      description: "You can join the Web3.0 BITMAN Discord community",
    },
    {
      title: "Benefits",
      status: [
        "Normal Guild Channel",
        "Normal Guids",
        "Community Game Participation",
        "Meetings With Founders",
      ],
      description: [
        "ou can join the Web3.0 BITMAN Discord community",
        "You will be able to enjoy research articles and content provided by BITMAN users and BITMAN Influencers.",
        "You will be able to enjoy research articles and content provided by BITMAN users and BITMAN Influencers.",
        "If you post articles and share your own ideas to the community,you will have chances to get rewards.",
      ],
    },
    {
      title: "Three Stars",
      status: "BTMT NFT Holders & Hodl 2,000 BTMT",
      description: "You can join the Web3.0 BITMAN Discord community",
    },
    {
      title: "Benefits",
      status: [
        "Exclusive Guilds Channel",
        "IDO/IEO Deal Access",
        "Research and Content",
      ],
      description: [
        "You can participate in the exclusive guilds to enjoy interaction with enthusiastic BTMT holders. You will be exposed by differentiated and valuable information than below Tier",
        "IDO/IEO Deal Access Tier 3 users are the only group members who can access to exclusive and attractive IDO/IEO deals provided by Web3.0 BITMAN community.",
        "You will be able to enjoy research articles and content provided by BITMAN users and BITMAN Influencers. ",
      ],
    },
  ];
  return (
    <dvi>
      <h1>Tiers</h1>
      <Div>
        <h1>TIER1</h1>
        <h1>TIER2</h1>
        <h1>TIER3</h1>
      </Div>
      <Div>
        {tireItems.map((tires) => (
          <TiresItem data={tires} />
        ))}
      </Div>
      <Div>
        <h1>Go to be Tire1</h1>
        <h1>Go to be Tire2</h1>
        <h1>Go to be Tire3</h1>
      </Div>
    </dvi>
  );
}

export default TiresList;
