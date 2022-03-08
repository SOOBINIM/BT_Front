import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-image: url("assets/BTMT_Web3.png");
  background-repeat: no-repeat;
  background-position: 300px 184px;
  /* background-color: #003afe; */
`;

const InnerDiv = styled.div`
  white-space: pre-line;
  width: 1320px;
  margin: 0 auto;
`;

const TextDiv = styled.div`
  margin-top: 168px;
  width: 624px;
  height: 300px;
`;

const P1 = styled.p`
  /* background: #003afe; */
  background: -webkit-linear-gradient(left, #003afe, #00ffa3);
  background: -moz-linear-gradient(right, #003afe, #00ffa3);
  background: -o-linear-gradient(right, #003afe, #00ffa3);
  background: linear-gradient(to right, #003afe, #00ffa3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
  font-size: 140px;
  /* display: flex;
  justify-content: flex-end;
  background: linear-gradient(to right, #003afe, #00ffa3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`;

const P2 = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 48px;
  margin-top: 40px;
  margin-bottom: 64px;
`;

const Button = styled.button`
  background-color: #003afe;
  border-radius: 40px;
  color: #040619;
  width: 300px;
  height: 67px;
  top: 692px;
  font-size: 24px;
  font-weight: 700;
`;

function BitmanWeb() {
  const title = "BITMAN \n WEB 3.0";
  const desciption = `The Biggest and the most active cryptocurrency community in South Korea since 2016
    BITMAN started its journey as a blockchain & cryptocurerncy community in 2016. 
    Now Bitman evloves to web3.0 blockchain community not only to provide valuable
    information for community users, but also to give incentives for creators and contributors 
    who give valuable information for community.
    By holding Bitman Token, you can join the exclusive DISCORD community.`;
  const discordButton = "Join Discord";

  return (
    <Div>
      <InnerDiv>
        <TextDiv>
          <P1>{title}</P1>
        </TextDiv>
        <P2>{desciption}</P2>
        <Button>{discordButton}</Button>
      </InnerDiv>
    </Div>
  );
}

export default BitmanWeb;
