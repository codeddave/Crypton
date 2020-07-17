import React, { Component } from "react";
import Spinner from "./Spinner";

import { apiUrl } from "./api";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      searchResults: [],
      loading: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { searchQuery } = this.state;
    this.setState({
      searchQuery: e.target.value,
    });
    if (!searchQuery) {
      return "";
    }
    this.setState({
      loading: true,
    });

    fetch(`${apiUrl}/autocomplete?searchQuery=${this.state.searchQuery}`)
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        this.setState({
          loading: false,
          searchResults: result,
        });
      });
    console.log(this.state.searchResults);
  }
  renderSearchResults() {
    const { searchResults, loading, searchQuery } = this.state;

    if (!searchQuery) {
      return "";
    }
    if (searchResults.length > 0) {
      return (
        <div className="search-results-wrap shadow">
          {searchResults.map((item) => (
            <div key={item.id} className="search-result">
              {item.name} ({item.symbol})
            </div>
          ))}
        </div>
      );
    }

    if (!loading) {
      return (
        <div>
          <p>No Results Found</p>
        </div>
      );
    }
  }
  render() {
    const { loading, searchQuery } = this.state;
    return (
      <div className="search text-center ">
        <input
          type="text"
          placeholder="Currency Name"
          onChange={this.onChange}
          value={searchQuery}
        />

        {loading ? <Spinner width="12px" height="12px" /> : null}
        {this.renderSearchResults()}
      </div>
    );
  }
}
export default SearchBar;
