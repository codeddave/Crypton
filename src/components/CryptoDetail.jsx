import React, { Component } from "react";
import { apiUrl } from "./api";
import axios from "axios";

class CryptoDetail extends Component {
  componentDidMount() {
    this.fetchDetail();
  }

  async fetchDetail() {
    const api = `${apiUrl}/cryptocurrencies/${this.props.match.params.id}`;
    const res = await axios.get(api);
    const response = res.data;
    console.log(response);
  }
  render() {
    return (
      <div>
        <h1>Hello fromm the Detail Component</h1>
      </div>
    );
  }
}
export default CryptoDetail;
