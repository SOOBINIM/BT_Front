import React from "react";
import styled from "styled-components";

const OuterDiv = styled.div`
  width: 1320px;
  margin: 0 auto;

  background: #24252a;
  border: 2px solid green;
  box-sizing: border-box;
  border-radius: 16px;
`;

const InnterDiv = styled.div`
  display: flex;
  width: 1320px;
  margin: 0 auto;
  flex-direction: column;

  background: #24252a;
  border: 2px solid blue;
  box-sizing: border-box;
  border-radius: 16px;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 98px;
  margin-bottom: 40px;
  margin: 80px 0px;
`;

const Dl = styled.dl`
  display: flex;
  flex-direction: column;

  background: #24252a;
  border: 1px solid #00ffa3;
  box-sizing: border-box;
  border-radius: 16px;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-around;
  margin-bottom: 72px;
  background-color: red;

  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  margin-bottom: 72px;

  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
`;

const StatusDd = styled.dd`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #ffffff;

  margin: 8px 0px;
`;

const DescDd = styled.dd`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #a7a8aa;
`;

const TitleDt = styled.dt`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  margin: 16px 0px;
`;

const TempDiv = styled.div`
  background-color: purple;
`;

const Button = styled.button`
  width: 413px;
  height: 68px;
  left: 0px;
  top: 936px;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #040619;

  margin: 32px 0px;

  background: #00ffa3;
  border-radius: 80px;
`;

function TiresItmeList({ data }) {
  return <TempDiv>{data}</TempDiv>;
}

function TiresItem({ data }) {
  return (
    <Dl>
      <TitleDt>{data.title}</TitleDt>
      <StatusDd>
        {data.status.map((statusData) => (
          <TiresItmeList data={statusData} />
        ))}
      </StatusDd>
      <DescDd>
        {data.description.map((descData) => (
          <TiresItmeList data={descData} />
        ))}
      </DescDd>
    </Dl>
  );
}

function TiresList() {
  const tireItems = [
    {
      title: ["One Star"],
      status: ["HODL 100 BTMT"],
      description: ["You can join the Web3.0 BITMAN Discord community"],
    },
    {
      title: ["Benefits"],
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
      title: ["Two Stars"],
      status: ["HODL 500 BTMT"],

      description: ["You can join the Web3.0 BITMAN Discord community"],
    },
    {
      title: ["Benefits"],
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
      title: ["Three Stars"],
      status: ["BTMT NFT Holders & Hodl 2,000 BTMT"],
      description: ["You can join the Web3.0 BITMAN Discord community"],
    },
    {
      title: ["Benefits"],
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
    <OuterDiv>
      <InnterDiv>
        <H1>Tiers</H1>
        <TitleDiv>
          <h1>TIER 1</h1>
          <h1>TIER 2</h1>
          <h1>TIER 3</h1>
        </TitleDiv>
      </InnterDiv>
      <div>
        {tireItems.map((tires) => (
          <TiresItem data={tires} />
        ))}
      </div>
      <ButtonDiv>
        <Button>Go to be Tire1</Button>
        <Button>Go to be Tire2</Button>
        <Button>Go to be Tire3</Button>
      </ButtonDiv>
    </OuterDiv>
  );
}

export default TiresList;
