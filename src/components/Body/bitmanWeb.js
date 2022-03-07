import React from "react";
import styled from "styled-components";

const Div = styled.div`
  white-space: pre-line;
`;

const Button = styled.button`
  background-color: #003afe;
  border-radius: 40px;
  color: #040619;
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
  font-weight: bold;
  /* display: flex;
  justify-content: flex-end;
  background: linear-gradient(to right, #003afe, #00ffa3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`;

function BitmanWeb() {
  const title = "BITMAN \n WEB 3.0";
  const desciption = `The Biggest and the most active cryptocurrency community in South Korea since 2016
    BITMAN started its journey as a blockchain & cryptocurerncy community in 2016. 
    Now Bitman evloves to web3.0 blockchain community not only to provide valuable information for community users, but also to give incentives for creators and contributors 
    who give valuable information for community.
    By holding Bitman Token, you can join the exclusive DISCORD community.`;
  const discordButton = "Join Discord";
  return (
    <Div>
      <P1>{title}</P1>
      <p>{desciption}</p>
      <Button>{discordButton}</Button>
    </Div>
  );
}

export default BitmanWeb;
