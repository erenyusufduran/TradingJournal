import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Backtests from "./pages/Backtests";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/accounts" exact component={Accounts} />
            <Route path="/backtests" exact component={Backtests} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
