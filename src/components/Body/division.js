import React from "react";
import styled from "styled-components";

const DivisionDiv = styled.div`
  background-color: #00ffa3;
  height: 80px;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const P = styled.p`
  font-weight: bold;
`;

function Division() {
  const text = "BITMAN WEB 3.0";
  return (
    <DivisionDiv>
      <P>{text}</P>
    </DivisionDiv>
  );
}
export default Division;
