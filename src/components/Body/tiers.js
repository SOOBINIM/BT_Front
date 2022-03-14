import React from "react";
import styled from "styled-components";

const OuterDiv = styled.div`
  width: 1320px;
  margin: 0 auto;

  /* background: #24252a; */
  /* border: 2px solid green; */
  box-sizing: border-box;
  border-radius: 16px;
`;

const InnterDiv = styled.div`
  display: flex;
  width: 1320px;
  margin: 0 auto;
  flex-direction: column;

  box-sizing: border-box;
  border-radius: 16px;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 98px;
  margin-top: 280px;
  margin-bottom: 80px;
  /* margin-bottom: 40px; */
  /* margin: 80px 0px; */
`;

const TiersDiv = styled.div`
  display: flex;
  /* align-items: center; */

  justify-content: space-between;
  /* justify-content: space-between; */
  /* border: 1px solid red; */
`;

const TierUl = styled.ul`
  /* margin: 32px 0px; */
  /* background: #24252a; */
  /* border: 1px solid orange; */
  box-sizing: border-box;
  border-radius: 16px;
`;

const TiersH1 = styled.h1`
  display: flex;
  justify-content: center;

  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
`;

const TitleLi = styled.li`
  height: 904px;
  width: 413px;
  background: #24252a;

  border: 1px solid #00ffa3;
  box-sizing: border-box;
  border-radius: 16px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

const CircleWrapper = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  border-radius: 50%;
  background: rgba(0, 255, 163, 0.4);
  /* transform: matrix(1, 0, 0, -1, 0, 0); */
`;

const Circle = styled.div`
  margin: auto;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(0, 255, 163);
`;

const TitleUl = styled.ul`
  margin-top: 40px;
  margin-left: 32px;
  margin-right: 32px;
`;

const SubTitleLi = styled.li`
  margin-top: 16px;
  /* margin-bottom: 8px; */
`;

const SubTitleLiLi = styled.li`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  margin-bottom: 8px;
`;

const TitleDiv = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #00ffa3;
`;

const TextLi = styled.li`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #a7a8aa;
`;

const LineDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  top: 22px;

  border-style: dashed;

  /* display: flex; */
  /* justify-content: center; */
  width: 907px;
  height: 6px;

  background: linear-gradient(270deg, #003afe 0%, #0082dd 36.48%, #00ffa3 100%),
    linear-gradient(270deg, #003afe 0%, #0082dd 36.48%, #00ffa3 100%);
`;

function TiresList() {
  const tireItems = [
    {
      title: "Tier 1",
      content: [
        {
          title: "One Star",
          list: [
            {
              subTitle: "HODL 100 BTMT",
              text: "You can join the Web3.0 BITMAN Discord community",
            },
          ],
        },
        {
          title: "Benefits",
          list: [
            {
              subTitle: "HODL 100 BTMT",
              text: "You can join the Web3.0 BITMAN Discord community",
            },
            {
              subTitle: "Research and Content",
              text: "You will be able to enjoy research articles and content provided by BITMAN users and BITMAN Influencers.",
            },
            {
              subTitle: "Research and Content",
              text: "You will be able to enjoy research articles and content provided by BITMAN users and BITMAN Influencers.",
            },
            {
              subTitle: "Contribution Rewards",
              text: "If you post articles and share your own ideas to the community,you will have chances to get rewards.",
            },
            {
              subTitle: "Make Governance Proposals",
              text: "As a member of Web3.0 BITMAN community, you can propose and suggest your novel ideas and vision to the",
            },
          ],
        },
      ],
    },
    {
      title: "Tier 2",
      content: [
        {
          title: "Two Star",
          list: [
            {
              subTitle: "HODL 500 BTMT",
              text: "You can join the Web3.0 BITMAN Discord community",
            },
          ],
        },
        {
          title: "Benefits",
          list: [
            {
              subTitle: "Normal Guild Channel",
              text: "You can join the Web3.0 BITMAN Discord community",
            },
            {
              subTitle: "Normal Guids",
              text: "You will be able to enjoy research articles and content provided by BITMAN users and BITMAN Influencers.",
            },
            {
              subTitle: "Community Game Participation",
              text: "You will be able to enjoy research articles and content provided by BITMAN users and BITMAN Influencers.",
            },
            {
              subTitle: "Meetings With Founders",
              text: "If you post articles and share your own ideas to the community,you will have chances to get rewards.",
            },
          ],
        },
      ],
    },
    {
      title: "Tier 3",
      content: [
        {
          title: "Three Star",
          list: [
            {
              subTitle: "BTMT NFT Holders & Hodl 2,000 BTMT",
              text: "You can join the Web3.0 BITMAN Discord community",
            },
          ],
        },
        {
          title: "Benefits",
          list: [
            {
              subTitle: "Exclusive Guilds Channel",
              text: "You can participate in the exclusive guilds to enjoy interaction with enthusiastic BTMT holders.\nYou will be exposed by differentiated and valuable information than below Tier",
            },
            {
              subTitle: "IDO/IEO Deal Access",
              text: "IDO/IEO Deal Access\nTier 3 users are the only group members who can access to exclusive and attractive IDO/IEO deals provided by Web3.0 BITMAN community.",
            },
            {
              subTitle: "Research and Content",
              text: "You will be able to enjoy research articles and content provided by BITMAN users and BITMAN Influencers. ",
            },
          ],
        },
      ],
    },
  ];

  return (
    <OuterDiv>
      <InnterDiv>
        <H1>Tiers</H1>
        <LineDiv>
          <Line></Line>
        </LineDiv>
        <TiersDiv>
          {tireItems.map((data, index) => (
            <TierUl>
              <CircleWrapper>
                <Circle></Circle>
              </CircleWrapper>
              <TiersH1>{data.title}</TiersH1>
              <TitleLi key={index}>
                {data.content.map((data, index) => (
                  <TitleUl>
                    <li>
                      <TitleDiv key={index}>{data.title}</TitleDiv>
                      <ul>
                        <li>
                          {data.list.map((data, index) => (
                            <SubTitleLi>
                              <SubTitleLiLi key={index}>
                                {data.subTitle}
                              </SubTitleLiLi>
                              <ul>
                                <TextLi>{data.text}</TextLi>
                              </ul>
                            </SubTitleLi>
                          ))}
                        </li>
                      </ul>
                    </li>
                  </TitleUl>
                ))}
              </TitleLi>
            </TierUl>
          ))}
        </TiersDiv>
      </InnterDiv>
    </OuterDiv>
  );
}

export default TiresList;
