import React from "react";
import styled from "styled-components";

const InnerDiv = styled.div`
  width: 1320px;
  margin: 0 auto;
`;

const TitleDiv = styled.div`
  /* display: flex; */
`;

const Dl = styled.dl`
  display: flex;
  justify-content: space-between;
  /* width: 1320px; */

  margin-top: 160px;
`;

const DtTitle = styled.dt`
  color: #00ffa3;
  line-height: 100%;
  vertical-align: top;
  font-weight: 800;
  font-size: 52px;
  /* display: flex; */
  /* flex-direction: column; */
  /* background-color: red; */
`;

const DtSubTitle = styled.dt`
  color: #00ffa3;
  line-height: 100%;
  vertical-align: top;
  font-weight: 800;
  font-size: 32px;
  margin-left: 10px;
  /* display: flex; */
  /* flex-direction: column; */
  /* background-color: red; */
`;

const DdScore = styled.dd`
  font-weight: 800;
  font-size: 180px;
  letter-spacing: 2%;
  /* width: 600px; */
  background: linear-gradient(#00ffa3, #00fff0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const DdScoreUnit = styled.dd`
  font-weight: 500;
  font-style: normal;
  font-size: 140px;
  letter-spacing: 2%;
  line-height: 170.66px;
  color: #00fff0;
  margin-left: 16px;
  margin-top: 48px;
`;

const DdDescription = styled.dd`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 640px;
  margin-right: 4px;
  /* margin-left: 122px; */
  /* background-color: blue; */
  font-weight: 400;
  font-size: 28px;
  line-height: 48px;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
`;

const Button = styled.button`
  background-color: #00ffa3;
  padding: 19px, 66px;

  border-radius: 40px;
  border: 1px solid #00ffa3;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  font-weight: 700;
  font-size: 24px;

  padding: 19px 66px;
`;

const DDiv = styled.div`
  display: flex;
  align-items: center;
`;

function InfoItem({ data }) {
  return (
    <TitleDiv>
      <Dl>
        <div>
          <DDiv>
            <DtTitle>{data.title}</DtTitle>
            <DtSubTitle>{data.subTitle}</DtSubTitle>
          </DDiv>
          <DDiv>
            <DdScore>{data.score}</DdScore>
            <DdScoreUnit>{data.scoreUnit}</DdScoreUnit>
          </DDiv>
        </div>
        <div>
          <DdDescription>{data.description}</DdDescription>
        </div>
      </Dl>
    </TitleDiv>
  );
}

function InfoList() {
  const infoItems = [
    {
      title: "Signed up user",
      subTitle: "",
      score: "850",
      scoreUnit: "K+",
      description:
        "Bitman has more than 850K signed up users as of Feburary, 2022. When we guess the non-signed up users, the number of Bitman community users would be more than 2M, which is the biggest in South Korea.",
    },
    {
      title: "MAU",
      subTitle: "(Monthly Active Users)",
      score: "520",
      scoreUnit: "K+",
      description:
        "Bitman has 520K monthly active users. There are a lot of blockchain industry news feed, technical articles which educates diverse blockchain services, monthly news letter etc,. ",
    },
    {
      title: "DAU",
      subTitle: "(Daily Active Users)",
      score: "100",
      scoreUnit: "K+",
      description:
        "Bitman is the best community where users can get important news regarding blockchain industry and crypto projects, a lot of crypto investors and project builder come to Biman to get news.",
    },
    {
      title: "Monthly Posting",
      score: "30",
      scoreUnit: "K+",
      description:
        "As Bitman is the best community where users can get important news regarding blockchain industry and crypto projects, a lot of crypto investors and project builder come to Biman to get news.",
    },
  ];
  return (
    <InnerDiv>
      <TitleDiv>
        {infoItems.map((info, index) => (
          // (info) => console.log(info)

          <InfoItem data={info} key={index} />
        ))}
      </TitleDiv>
      <ButtonDiv>
        <Button>Join BITMAN</Button>
      </ButtonDiv>
    </InnerDiv>
  );
}

export default InfoList;
