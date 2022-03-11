import React from "react";
import styled from "styled-components";

const OuterDiv = styled.div`
  width: 1320px;
  margin: 0 auto;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* align-content: space-between; */
  border: 2px solid red;
  /* width: 1320px; */
  border: 2px solid white;
`;

const PartnersDiv = styled.div`
  /* margin: 16px; */
  margin-top: 8px;
  width: 322px;
  height: 120px;
  border: 2px solid green;
  &:nth-child(4) {
    background-color: red;
  }
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 98px;
  margin-bottom: 40px;
  margin: 80px 0px;
`;

function PartnersItem({ data }) {
  return <PartnersDiv>{data.title}</PartnersDiv>;
}

function PartnersList() {
  const PartnersItems = [
    {
      src: "",
      title: "1",
    },
    {
      src: "",
      title: "2",
    },
    {
      src: "",
      title: "3",
    },
    {
      src: "",
      title: "4",
    },
    {
      src: "",
      title: "5",
    },
    {
      src: "",
      title: "6",
    },
    {
      src: "",
      title: "7",
    },
    {
      src: "",
      title: "8",
    },
    {
      src: "",
      title: "9",
    },
    {
      src: "",
      title: "10",
    },
    {
      src: "",
      title: "11",
    },
    {
      src: "",
      title: "12",
    },
    {
      src: "",
      title: "13",
    },
    {
      src: "",
      title: "14",
    },
    {
      src: "",
      title: "15",
    },
    {
      src: "",
      title: "16",
    },
  ];

  return (
    <OuterDiv>
      <H1>Partners</H1>

      <InnerDiv>
        {PartnersItems.map((data) => (
          <PartnersItem data={data} />
        ))}
      </InnerDiv>
    </OuterDiv>
  );
}

export default PartnersList;
