import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #00ffa3;
  border-radius: 40px;
  padding: 19px, 66px;
`;

function InfoItem({ data }) {
  return (
    <dl>
      <dt>{data.title}</dt>
      <dd>{data.score}</dd>
      <dd>{data.description}</dd>
    </dl>
  );
}

function InfoList() {
  const infoItems = [
    {
      title: "Signed up user",
      score: "850 K+",
      description:
        "Bitman has more than 850K signed up users as of Feburary, 2022. When we guess the non-signed up users, the number of Bitman community users would be more than 2M, which is the biggest in South Korea.",
    },
    {
      title: "MAU (Monthly Active Users)",
      score: "520 K+",
      description:
        "Bitman has 520K monthly active users. There are a lot of blockchain industry news feed, technical articles which educates diverse blockchain services, monthly news letter etc,. ",
    },
    {
      title: "DAU (Daily Active Users)",
      score: "100 K+",
      description:
        "Bitman is the best community where users can get important news regarding blockchain industry and crypto projects, a lot of crypto investors and project builder come to Biman to get news.",
    },
    {
      title: "Monthly Posting",
      score: "30 K+",
      description:
        "As Bitman is the best community where users can get important news regarding blockchain industry and crypto projects, a lot of crypto investors and project builder come to Biman to get news.",
    },
  ];
  return (
    <div>
      {infoItems.map((info) => (
        // (info) => console.log(info)

        <InfoItem data={info} />
      ))}
      <Button>Join BITMAN</Button>
    </div>
  );
}

export default InfoList;
