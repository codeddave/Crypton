import React, { Component } from "react";
import { apiUrl } from "./api";
import Spinner from "./Spinner";
import "./CryptoDetail.css";
import axios from "axios";

class CryptoDetail extends Component {
  state = {
    currency: {},
    loading: false,
  };
  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.fetchDetail();
  }

  async fetchDetail() {
    try {
      const api = `${apiUrl}/cryptocurrencies/${this.props.match.params.id}`;
      const res = await axios.get(api);
      const response = res.data;

      this.setState({
        currency: response,
        loading: false,
      });
      console.log(this.state.currency);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { currency } = this.state;
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className="details shadow-lg">
            {" "}
            <div>
              <p>
                {currency.name} <span>({currency.symbol})</span>
              </p>
            </div>
            <div>
              Rank <span>{currency.rank}</span>
            </div>{" "}
            <div>
              Price <span>${currency.price}</span>
            </div>
            <div>
              Market Cap <span>${currency.marketCap}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default CryptoDetail;
