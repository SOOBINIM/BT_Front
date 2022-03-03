import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <img src="../../img/BTMT_TextSymbol.png"></img>

      <div class="nav_itmes">
        <ul>
          <li>
            <a href="#">Web 3.0 Bitman</a>
          </li>
          <li>
            <a href="#">Governance</a>
          </li>
          <li>
            <a href="#">Staking</a>
          </li>
          <li>
            <a href="#">Whitepaper</a>
          </li>
        </ul>
        <button className="discord">Discord</button>
      </div>
    </header>
  );
}

export default Header;
