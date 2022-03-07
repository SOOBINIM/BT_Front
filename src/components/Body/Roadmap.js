import React from "react";
import styled from "styled-components";

// function RoadmapItem({ data }) {
//   return <div>{data.map((content) => console.log(content))}</div>;
// }

function RoadmapList() {
  const roadmapItems = [
    {
      date: "2022.1Q",
      contents: [
        "Bitman Web3.0 whitepaper & Roadmap 1.0 release",
        "Launch of Web3.0 Community channel",
        "Smart contract audit of Bitman Token(BTMT)",
        "Establishment of Guild operation policy",
      ],
    },
    {
      date: "2022.2Q",
      contents: [
        "Establishment of Bitman Architect system including data crwaling & collecting machine",
        "Launch of staking protocol for BTMT",
        "BTMT staking reward distribution system",
        "Staking pool smart contract audit",
      ],
    },
    {
      date: "2022.3Q",
      contents: [
        "On-chain Governance system development",
        "Voting system by Bitman Governance",
        "The first election for Bitman Influencer",
        "Web3.0 based proposal suggestion system",
        "Curation & Inspection reward distribution system development",
        "Guild-Community onchain verification",
        "NFT verification system for NFT holders",
        "BIP(Bitman Operation Policy) system",
        "Proposal suggestion & BTMT holder voting",
      ],
    },
    {
      date: "2022.4Q",
      contents: [
        "Rating for community members through Bitman Architect",
        "Web3.0 community users dashboard for communiy",
        "Indirect Web3.0 integration with Bitman community",
        "Classified NFT rank system",
        "On-chain NFT verification system",
      ],
    },
    {
      date: "2023.2Q",
      contents: [
        "Launch of community & guild competition game",
        "P2E(Play to Earn) community game service for BTMT holders and guilds members",
        "Game reward distribution smart contract development",
        "Development of meme contents incentive system",
      ],
    },
  ];
  return (
    <div>
      <h1>Roadmap</h1>
      <div></div>
    </div>
  );
}

export default RoadmapList;
