import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <div className="search text-center ">
        <input type="text" placeholder="search" />
      </div>
    );
  }
}
export default SearchBar;
