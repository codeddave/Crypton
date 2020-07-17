import React from "react";
import SearchBar from "./SearchBar";
import "./Header.css";

function Header() {
  return (
    <div className="header-wrap shadow">
      <a className="navbar-brand" href="/">
        <i className="fas fa-coins logo-coin"></i>
        <span className="crypton">Crypton</span>
      </a>
      <SearchBar width="12px" height="12px" />
    </div>
  );
}
export default Header;
