import React, { Component } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import Table from "./Table";
import Pagination from "./Pagination";
class CryptoList extends Component {
  state = {
    loading: false,
    currencies: [],
    error: null,
    totalPages: 0,
    page: 1,
  };

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies = async () => {
    this.setState({
      loading: true,
    });
    const { page } = this.state;
    const apiUrl = `https://api.udilia.com/coins/v1/cryptocurrencies?page=${page}&perPage=20`;

    const res = await axios.get(apiUrl);
    const response = res.data;
    console.log(response);
    this.setState({
      currencies: response.currencies,
      loading: false,
      totalPages: response.totalPages,
    });
  };

  handlePagination = (direction) => {
    let nextPage = this.state.page;
    if (direction === "prev") {
      nextPage--;
    } else {
      nextPage++;
    }
    this.setState(
      {
        page: nextPage,
      },
      () => {
        //call the fetchcurrencies function immediately after changing "page" state
        this.fetchCurrencies();
      }
    );
  };
  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div>
            <Table currencies={this.state.currencies} />
            <Pagination
              page={this.state.page}
              totalPages={this.state.totalPages}
              handlePagination={this.handlePagination}
            />
          </div>
        )}
      </div>
    );
  }
}
export default CryptoList;
