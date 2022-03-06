import React from "react";
import InfoList from "./infoList";


function InfoItems(){
    const infoItmes = [
        {
            infoTitle : "Signed up user",
            infoScore : "850 K+",
            infoDescription : "Bitman has more than 850K signed up users as of Feburary, 2022. When we guess the non-signed up users, the number of Bitman community users would be more than 2M, which is the biggest in South Korea.",
        },
    ]


    return(
        <InfoList />
    )

}

export default InfoItems;