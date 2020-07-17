import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./Table.css";

function Table(props) {
  const { currencies, history } = props;

  const handlePercent = (percent) => {
    if (percent > 0) {
      return <span className="percent-increase">{percent}% &uarr;</span>;
    } else if (percent < 0) {
      return <span className="percent-drop">{percent}% &darr;</span>;
    } else {
      return <span>{percent}</span>;
    }
  };
  return (
    <div className="table-wrap container">
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Currency</th>
            <th scope="col">Price</th>
            <th scope="col">Market Cap</th>
            <th scope="col">24H Change</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => {
            return (
              <tr
                className="shadow-lg"
                style={{ cursor: "pointer" }}
                key={currency.id}
                onClick={() => history.push(`currency/${currency.id}`)}
              >
                <td>
                  {" "}
                  <span className="mr-2">{currency.rank}</span>
                  {currency.name}
                </td>
                <td>
                  <span>$</span>
                  {currency.price}
                </td>
                <td>
                  <span>$</span>
                  {currency.marketCap}
                </td>
                <td>{handlePercent(currency.percentChange24h)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  currencies: PropTypes.array,
};
export default withRouter(Table);
