import React from "react";

import logo from "../../assets/img/logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" width="" height="" />
      </div>
      <nav>
        <button className="btn ">Sign In</button>
      </nav>
    </header>
  );
};

export default Header;
