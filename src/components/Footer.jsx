import React from "react";

import iconStar from "../assets/images/icon-star.svg";
import "./css/footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="my-footer">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/VictorKevz" target="_blank">Victor Kevz </a>.©{currentYear}
  </footer>
  );
}

export default Footer;

