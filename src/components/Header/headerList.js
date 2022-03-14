import React from "react";
import logoPath from "../../img/BTMT_TextSymbol.png";
import styled from "styled-components";

const Header = styled.header`
  background-color: #040619;
`;

const HeaderInnerDiv = styled.div`
  width: 1320px;
  height: 86px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const Li = styled.li`
  font-size: 18px;
  font-weight: 500;
  padding-right: 64px;
  padding-top: 11px;
  padding-bottom: 11px;
`;

const A = styled.a`
  text-decoration: none;
  display: block;
  color: #fff;
  &:hover {
    color: #00ffa3;
  }
`;

const Button = styled.button`
  width: 149px;
  height: 44px;
  font-size: 16px;
  font-weight: 700;
  background-color: #00ffa3;

  &:hover {
    background: linear-gradient(to right, #00ffa3, #003afe);
    color: #fff;
  }
  border-radius: 80px;
  padding: 12px, 42px;
`;

function Title({ title }) {
  return (
    <Li>
      <A href="#">{title.content}</A>
    </Li>
  );
}

function TitleList({ titles }) {
  return (
    <Header>
      <HeaderInnerDiv>
        <img src={logoPath} alt="BTMT Text Symbol"></img>
        <Nav>
          <Ul>
            {titles.map((title, index) => (
              <Title title={title} key={index} />
            ))}
          </Ul>
          <Button>Discord</Button>
        </Nav>
      </HeaderInnerDiv>
    </Header>
  );
}

export default TitleList;
