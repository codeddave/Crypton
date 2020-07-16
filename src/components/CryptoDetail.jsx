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
  handlePercent = (percent) => {
    if (percent > 0) {
      return <span className="percent-increase">{percent}% &uarr;</span>;
    } else if (percent < 0) {
      return <span className="percent-drop">{percent}% &darr;</span>;
    } else {
      return <span>{percent}</span>;
    }
  };

  render() {
    const { currency } = this.state;
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div>
            <div>
              <h1 className="text-center mt-4">
                {currency.name} <span>({currency.symbol})</span>
              </h1>
            </div>
            <div className="details shadow-lg">
              {" "}
              <div className="detail-item">
                Rank <span className="detail-value">{currency.rank}</span>
              </div>{" "}
              <div className="detail-item">
                Price <span className="detail-value">${currency.price}</span>
              </div>
              <div className="detail-item">
                24H Change{" "}
                <span className="detail-value">
                  {this.handlePercent(currency.percentChange24h)}
                </span>
              </div>
              <div className="detail-item">
                Market Cap{" "}
                <span className="detail-value">${currency.marketCap}</span>
              </div>
              <div className="detail-item">
                24H Volume
                <span className="detail-value">${currency.volume24h}</span>
              </div>
              <div className="detail-item">
                Total Supply
                <span className="detail-value">${currency.totalSupply}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default CryptoDetail;
