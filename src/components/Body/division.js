import React from "react";
import styled from "styled-components";
import Ticker from "react-ticker";
import { usePageVisible } from "./tickerVisible";

const BackGroundDiv = styled.div`
  background-color: #00ffa3;
`;

const DivisionDiv = styled.div`
  background-color: #00ffa3;
  height: 80px;
  display: flex;
  align-items: center;
  /* margin-left: 72px; */
`;

const InnerDiv = styled.div`
  margin-left: 72px;
`;

const Span = styled.span`
  font-weight: 700;
  font-size: 32px;
  color: #040619;
`;

function Division() {
  const text = "BITMAN WEB 3.0";
  const isPageVisible = usePageVisible();
  return (
    <BackGroundDiv>
      <Ticker move={isPageVisible}>
        {({ index }) => (
          <DivisionDiv>
            <InnerDiv>
              <Span>{text}</Span>
            </InnerDiv>
          </DivisionDiv>
        )}
      </Ticker>
    </BackGroundDiv>
  );
}
export default Division;
