import React from "react";
import logoPath from "../../img/BTMT_TextSymbol.png";
import styled from "styled-components";
// import GlobalStyle from "./GlobalStyle";

const Header = styled.header`
  background-color: #d8b9b9;
  /* z-index: 999; */
  /* position: relative; */
  /* width: 100%; */
  font-family: Montserrat-Regular;
  /* position: fixed; */
  // background-color: #040619;
`;

const HeaderDiv = styled.div`
  display: flex;
  background-color: #f2d8d3;
  position: relative;
  width: 1920px;
  height: 86px;
  margin: 0 auto;
  /* display: flex; */
  /* width: 100%; */
`;

const HeaderInnerDiv = styled`
  position: absolute;
  height: 34px;
  top: 0;
  bottom: 0;
  /* margin: auto; */
`;

const Img = styled.img`
  background-color: blue;
`;

const Nav = styled.nav``;

// const Nav = styled.nav`
//   background-color: #a3b9b9;
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   /* margin-right: 300px; */
//   /* display: flex;
//   align-items: center;
//   align-self: stretch;
//   height: 100%; */
// `;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

// const Li = styled.li`
//   margin-right: 50px;
// `;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  background-color: black;
  /* font-size: 40px; */
  display: block;

  /* font-family: "Montserrat"; */
`;

const ButtonDiv = styled.div`
  background-color: red;
  height: 34px;
  top: 0;
  bottom: 0;
  /* margin: auto; */
`;

const Button = styled.button`
  background-color: #00ffa3;
  border-radius: 80px;
  padding: 12px, 42px;
`;

function Title({ title }) {
  return (
    <li>
      <A href="#" style={{ color: title.color }}>
        {title.content}
      </A>
    </li>
  );
}

function TitleList({ titles }) {
  return (
    <Header>
      <HeaderDiv>
        <HeaderInnerDiv>
          <Img src={logoPath} alt="BTMT Text Symbol"></Img>
          <nav>
            <Ul>
              {titles.map((title) => (
                <Title title={title} />
              ))}
            </Ul>
            <Button>Discord</Button>
          </nav>
        </HeaderInnerDiv>
      </HeaderDiv>
    </Header>
  );
}

export default TitleList;
