import React from "react";
import styled from "styled-components";
import logoPath from "../../img/BTMT_Footer.png";

const Footer = styled.footer`
  background-color: #04050f;
  padding: 280px 0;
`;

const OutterDiv = styled.div`
  width: 1320px;
  height: 452px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`;

const ImgDiv = styled.div`
  margin-top: 80px;
  width: 406px;
  height: 112px;
`;

const ContetnsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

const P = styled.p`
  margin-top: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
`;
const ContentInnerDiv = styled.div`
  width: 292px;
  display: flex;
  justify-content: flex-end;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  margin-bottom: 32px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Li = styled.li`
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

function FooterContent({ data }) {
  return (
    <div>
      <ContentInnerDiv>{data.title}</ContentInnerDiv>
      <Ul>
        {data.content.map((data, index) => (
          <Li key={index}>
            <a href="#">{data}</a>
          </Li>
        ))}
      </Ul>
    </div>
  );
}

function FooterList({ titles, desciption }) {
  return (
    <Footer>
      <OutterDiv>
        <ImgDiv>
          <img src={logoPath} alt="BTMT Text Logo"></img>
          <P>{desciption.desciption}</P>
        </ImgDiv>
        <ContetnsDiv>
          {titles.map((title, index) => (
            <FooterContent data={title} key={index} />
          ))}
        </ContetnsDiv>
      </OutterDiv>
    </Footer>
  );
}

export default FooterList;
