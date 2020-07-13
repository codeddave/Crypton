import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-wrap shadow">
      <a className="navbar-brand" href="/">
        <i className="fas fa-coins logo-coin"></i>
        <span className="crypton">Crypton</span>
      </a>
    </div>
  );
}
export default Header;
