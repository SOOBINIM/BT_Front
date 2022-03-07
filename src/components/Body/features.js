import React from "react";
import styled from "styled-components";

function FeaturesItme({ data }) {
  return (
    <dl>
      <img src={data.img} alt="BTMT Features Images"></img>
      <dt>{data.title}</dt>
      <dd>{data.descriptions}</dd>
    </dl>
  );
}

function FeaturesList() {
  const featuresItems = [
    {
      img: "assets/BTMT_Features_serve_icon_1.svg",
      title: "Buy exclusive community NFT",
      descriptions:
        "You can buy or mint Bitman web 3.0 community NFT which is supported by Bitman community users. NFT holders can partipate in exclusive guilds and enjoy more information.",
    },
    {
      img: "assets/BTMT_Features_serve_icon_2.svg",
      title: "Incentives for users",
      descriptions:
        "BTMT is used for incentives for creators and contributors. The more users contribute for Bitman community, the more BTMT users will get.",
    },
    {
      img: "assets/BTMT_Features_serve_icon_3.svg",
      title: "Incentives for users",
      descriptions:
        "Users who own BTMT can participate in votes for internal policy of Bitman Web 3.0. Only BTMT holders can vote.",
    },
  ];
  return (
    <div>
      <h1>Features</h1>
      <div>
        {featuresItems.map((features) => (
          <FeaturesItme data={features} />
        ))}
      </div>
    </div>
  );
}

export default FeaturesList;
