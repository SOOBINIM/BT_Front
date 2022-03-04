import React from "react";
import logoPath from "../../img/BTMT_TextSymbol.png";
import styled from "styled-components";
// import GlobalStyle from "./GlobalStyle";

const Header = styled.header`
  background-color: #d8b9b9;
  z-index: 999;
  position: absolute;
  width: 100%;
  font-family: Montserrat-Regular;
  /* position: fixed; */
  // background-color: #040619;
`;

const HeaderDiv = styled.div`
  width: 1920px;
  height: 86px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 26px;
  /* margin-left: 300px; */
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Nav = styled.nav`
  background-color: #a3b9b9;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-right: 300px; */
  /* display: flex;
  align-items: center;
  align-self: stretch;
  height: 100%; */
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  list-style: none;
`;

const Li = styled.li`
  margin-right: 50px;
`;

const TitleItems = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: "Montserrat";
`;

const Button = styled.button`
  background-color: #00ffa3;
  border-radius: 80px;
  border: 0;
  outline: 0;
  padding: 12px, 42px, 12px, 42px;
`;

function Title({ title }) {
  return (
    <Li>
      <TitleItems href="#" style={{ color: title.color }}>
        {title.content}
      </TitleItems>
    </Li>
  );
}

function TitleList({ titles }) {
  return (
    <Header>
      <HeaderDiv>
        <ImgDiv>
          <Img src={logoPath} alt="BTMT Text Symbol"></Img>
        </ImgDiv>
        <Nav>
          <Ul>
            {/* <Positioner> */}

            {titles.map((title) => (
              <Title title={title} />
            ))}
            <Button>Discord</Button>

            {/* </Positioner> */}
          </Ul>
        </Nav>
      </HeaderDiv>
    </Header>
  );
}

export default TitleList;
