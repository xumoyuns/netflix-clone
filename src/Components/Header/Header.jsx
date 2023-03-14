import React from "react";

import logo from "../../assets/img/logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="NETFLIX logo" width="167" height="45" />
      </div>
      <nav>
        <button className="btn header-btn">Sign In</button>
      </nav>
    </header>
  );
};

export default Header;
