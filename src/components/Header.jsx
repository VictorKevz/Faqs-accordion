import React from "react";

import iconStar from "../assets/images/icon-star.svg";
import "./css/header.css";

function Header() {
  return (
    <header className="header-container">
      <figure>
        <img src={iconStar} alt="icon-star" />
      </figure>
      <h1>FAQs</h1>
    </header>
  );
}

export default Header;
