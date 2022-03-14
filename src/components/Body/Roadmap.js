import React from "react";
import styled from "styled-components";

// function RoadmapItem({ data }) {
//   return <div>{data.map((content) => console.log(content))}</div>;
// }

const OuterDiv = styled.div`
  width: 1320px;
  margin: 0 auto;
  position: relative;
  padding: 280px 0;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 98px;

  /* margin-bottom: 40px; */
  margin: 80px 0px;
`;

const Ul = styled.ul`
  display: flex;
`;

const DataLi = styled.li`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;

  color: #646b79;
`;

const ContentsUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 101px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

const DataDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

// const ContentsDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   background-color: gray;
// `;

const Li = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
`;

const InnerDiv = styled.div`
  position: relative;
  height: 1456px;
`;

const Bar = styled.div`
  position: absolute;

  left: 237px;
  width: 5px;
  height: 100%;
  background: radial-gradient(
    14919.97% 100% at 0% 0%,
    #00fff0 0%,
    #003afe 100%
  );

  top: 0;
`;

function RoadmapItem({ data }) {
  return (
    <div>
      <Ul>
        <DataDiv>
          <DataLi>{data.date}</DataLi>
        </DataDiv>
        <DataDiv>
          <ContentsUl>
            {data.contents.map((data, index) => (
              <Li key={index}>{data}</Li>
            ))}
          </ContentsUl>
        </DataDiv>
      </Ul>
    </div>
  );
}

function RoadmapList() {
  const roadmapItems = [
    {
      date: "2022.1Q",
      contents: [
        "• Bitman Web3.0 whitepaper & Roadmap 1.0 release",
        "• Launch of Web3.0 Community channel",
        "• Smart contract audit of Bitman Token(BTMT)",
        "• Establishment of Guild operation policy",
      ],
    },
    {
      date: "2022.2Q",
      contents: [
        "• Establishment of Bitman Architect system including data crwaling & collecting machine",
        "• Launch of staking protocol for BTMT",
        "• BTMT staking reward distribution system",
        "• Staking pool smart contract audit",
      ],
    },
    {
      date: "2022.3Q",
      contents: [
        "• On-chain Governance system development",
        "• Voting system by Bitman Governance",
        "• The first election for Bitman Influencer",
        "• Web3.0 based proposal suggestion system",
        "• Curation & Inspection reward distribution system development",
        "• Guild-Community onchain verification",
        "• NFT verification system for NFT holders",
        "• BIP(Bitman Operation Policy) system",
        "• Proposal suggestion & BTMT holder voting",
      ],
    },
    {
      date: "2022.4Q",
      contents: [
        "• Rating for community members through Bitman Architect",
        "• Web3.0 community users dashboard for communiy",
        "• Indirect Web3.0 integration with Bitman community",
        "• Classified NFT rank system",
        "• On-chain NFT verification system",
      ],
    },
    {
      date: "2023.2Q",
      contents: [
        "• Launch of community & guild competition game",
        "• P2E(Play to Earn) community game service for BTMT holders and guilds members",
        "• Game reward distribution smart contract development",
        "• Development of meme contents incentive system",
      ],
    },
  ];
  return (
    <OuterDiv>
      <H1>Roadmap</H1>
      <InnerDiv>
        {roadmapItems.map((data, index) => (
          <RoadmapItem data={data} key={index} />
        ))}
        <Bar></Bar>
      </InnerDiv>
    </OuterDiv>
  );
}

export default RoadmapList;
