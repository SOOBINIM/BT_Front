import React from "react";
import TitleList from "./headerList";

function Header() {
  const headerItmes = [
    {
      content: "Web 3.0 Bitman",
    },
    {
      content: "Governance",
    },
    {
      content: "Staking",
    },
    {
      content: "Whitepaper",
    },
  ];

  return <TitleList titles={headerItmes} />;
}

export default Header;
