import React from "react";
import styled from "styled-components";

const OuterDiv = styled.div`
  width: 1320px;
  margin: 0 auto;
  padding: 280px 0;

  /* background: #24252a; */
  box-sizing: border-box;
  border-radius: 16px;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  /* background-color: red; */
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 98px;

  /* margin-bottom: 40px; */
  margin: 80px 0px;
`;

const TitleLi = styled.li`
  /* background: #24252a; */
  background: #24252a;
  border-radius: 16px;

  padding: 16px 28px;
  width: 640px;
  height: 96px;

  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  padding: 32px 40px;
  /* identical to box height */

  color: #00ffa3;
`;

const ToggleLi = styled.li`
  display: none;

  position: relative;
  background-color: red;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  color: #24252a;
`;

const TitleDiv = styled.div`
  margin-top: 24px;
  &:hover {
    width: 640px;
    height: 374px;
    border-radius: 16px;

    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    ${TitleLi} {
      color: #24252a;
    }

    ${ToggleLi} {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px;

      position: static;
      width: 560px;
      height: 310px;
      left: 40px;
      top: 32px;
    }
  }
`;

const A = styled.a``;

const DescriptionUl = styled.ul`
  display: flex;
`;

function FaqItem({ data }) {
  return (
    <TitleDiv>
      <ul>
        <TitleLi>
          <A href="#">{data.title}</A>
          <DescriptionUl>
            <ToggleLi>{data.description}</ToggleLi>
            <img src="assets/check.png" alt="check"></img>
          </DescriptionUl>
        </TitleLi>
      </ul>
    </TitleDiv>
  );
}

function FaqList() {
  const faqItems = [
    {
      title: "What is BITMAN ?",
      description:
        "The Biggest and the most active cryptocurrency community in South Korea since 2016 BITMAN started its journey as a blockchain & cryptocurrency community in 2016. Now Bitman evolves to web3.0 blockchain community not only to provide valuable information for community users, but also to give incentives for creators and contributors who give valuable information to the community. By holding Bitman Token, you can join the exclusive DISCORD community.",
    },
    {
      title: "What is BITMAN Web 3.0?",
      description:
        "Bitman evolves to web3.0 blockchain community not only to provide valuable information for community users, but also to give incentives for creators and contributorsvwho give valuable information to the community. By holding Bitman Token, you can join the exclusive DISCORD community and participate in diverse community activities. Moreover, to provide incentives for BTMT holders, BITMAN will provide deal access for creative and innovative blockchain projects.",
    },
    {
      title: "What is BTMT? ",
      description:
        "BTMT is a project name of BITMAN Web 3.0, meanwhile it’s the symbol of BITMAN Web 3.0 project. BTMT means Bitman Token. The token is minted on Binance Chain (BNB). The token is audited by reliable and professional auditors such as Certik.",
    },
    {
      title: "How can I get BTMT ?",
      description:
        "If you are a user of the BITMAN community, then please actively interact with other users in the community. You can write articles and share your opinion and insights with others. Your comment on other’s thoughts is valuable. The more you interact with others in the community, you will have more chances to get BTMT as an incentive. In short, you have to write, read, share your ideas in the community to get BTMT.",
    },
    {
      title: "What kinds of incentives BTMT holders can enjoy?",
      description:
        "By holding BTMT, users can enjoy diverse community activities and chances for exclusive investment. BITMAN will provide quality information for blockchain project investment. Guilds are one of the systems for this. Users can participate in specific guilds where they can dive into a sea of information in depth. In addition, users can interact with other users who are verified by holding BTMT.   ",
    },
    {
      title: "What is BTMT NFT? ",
      description:
        "To provide more interesting incentives for BITMAN web 3.0 users, we will mint PFP NFTs. These NFT will be used as a certification for royal users. The users who hold BTMT NFT will have more incentives than other users who do not own NFTs. For example, NFT holders will be able to participate in exclusive guilds in DISCORD channel. ",
    },
  ];
  return (
    <OuterDiv>
      <div>
        <H1>FAQ</H1>
      </div>
      <InnerDiv>
        {faqItems.map((data, index) => (
          <FaqItem data={data} key={index} />
        ))}
      </InnerDiv>
    </OuterDiv>
  );
}

export default FaqList;
