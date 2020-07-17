import React from "react";
import "./Spinner.css";

function Spinner(props) {
  const { width, height } = props;
  return <div className="loader " style={{ width, height }}></div>;
}

Spinner.defaultProps = {
  width: "50px",
  height: "50px",
};
export default Spinner;
