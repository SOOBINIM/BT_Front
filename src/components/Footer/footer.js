import React from "react";
import FooterList from "./footerList";

function Footer() {
  const footerItems = [
    {
      title: "Bitman Web3.0",
      content: ["About"],
    },
    { title: "Community", content: ["BITMAN", "Guilds"] },
    {
      title: "SNS",
      content: [
        "Telegram(Global)",
        "Telegram(KOR)",
        "Twitter",
        "Github",
        "Contract Audit",
        "Whitepaper(ENG)",
      ],
    },
  ];

  const companyDescription = {
    desciption: `The first blockchain mass adoption \n
       as an web 3.0 crypto community in the world`,
  };

  return <FooterList titles={footerItems} desciption={companyDescription} />;
}

export default Footer;
