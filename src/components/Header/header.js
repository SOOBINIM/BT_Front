import React from "react";
import TitleList from "./headerList";

function Header() {
  const headerItmes = [
    {
      content: "Web 3.0 Bitman",
      color: "#00FFA3",
    },
    {
      content: "Governance",
      color: "#fff",
    },
    {
      content: "Staking",
      color: "#fff",
    },
    {
      content: "Whitepaper",
      color: "#fff",
    },
  ];

  return <TitleList titles={headerItmes} />;
}

export default Header;
