import React from "react";
import styled from "styled-components";
import logoPath from "../../img/BTMT_Footer.png";

const Footer = styled.footer`
  background-color: blue;
  /* background-color: #04050f; */
`;

const OutterDiv = styled.div`
  width: 1320px;
  height: 452px;
  margin: 0 auto;
  background-color: skyblue;

  display: flex;
  justify-content: space-between;
`;

const ImgDiv = styled.div`
  margin-top: 80px;
  background-color: navy;
  width: 406px;
  height: 112px;
`;

const ContetnsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: grey;
  margin-top: 80px;
`;

function FooterContentItem() {}

function FooterContent({ data }) {
  // const ContentMap = title.content.map((data) => console.log(data);

  return (
    <div>
      <div>{data.title}</div>
      <ul>
        {/* {title.map((e, i) => (
          <li key={i}>{e}</li>
        ))} */}
      </ul>
    </div>
  );
}

function FooterList({ titles, desciption }) {
  return (
    <Footer>
      <OutterDiv>
        <ImgDiv>
          <img src={logoPath} alt="BTMT Text Logo"></img>
          <p>{desciption.desciption}</p>
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
