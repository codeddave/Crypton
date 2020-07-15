import React from "react";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import CrptoDetail from "./components/CryptoDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Spinner from "./components/Spinner";
import CryptoList from "./components/CryptoList";

import "./App.css";
import CryptoDetail from "./components/CryptoDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={CryptoList} />
          <Route exact path="/currency/:id" component={CryptoDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
