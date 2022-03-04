import React from "react";
import styled from "styled-components";
import logoPath from "../../img/BTMT_Footer.png";

const Footer = styled.header`
  background-color: green;
  width: 100%;
  height: 452px;
  white-space: pre-line;
  display: flex;
  justify-content: center;
`;

const ImgTitleDiv = styled.div`
  display: flex;
`;

const UlDivIfo = styled.dl`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Dl = styled.dl`
  display: flex;
  flex-direction: column;
`;

const Dt = styled.dt`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const Dd = styled.dd`
  display: flex;
  flex-direction: row;
`;

const Img = styled.img``;

function FooterContent({ title, index }) {
  return (
    <div>
      <Dl>
        <Dt>{title.title}</Dt>
        <Dd>
          {title.content}
          {/* {title.map((data, index) =>
              console.log("data : " + data + "index : " + index)
            )} */}
        </Dd>
      </Dl>
    </div>
  );
}

function FooterList({ titles, desciption }) {
  return (
    <Footer>
      <ImgTitleDiv>
        <div>
          <img src={logoPath} alt="BTMT Text Logo"></img>
          <p>{desciption.desciption}</p>
        </div>
        <UlDivIfo>
          {titles.map((title, index) => (
            <FooterContent title={title} key={index} />
          ))}
        </UlDivIfo>
      </ImgTitleDiv>
    </Footer>
  );
}

export default FooterList;
