import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import "./App.scss";
import InsideCity from "./components/insidethecity/InsiteCity";
import InsideOrBetweenCity from "./InsideOrBetweenCity";
import BetweenCity from "./components/betweencity/BetweenCity";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/insideorbetween">
            <InsideOrBetweenCity />
          </Route>
          <Route exact path="/insidecity">
            <InsideCity />
          </Route>
          <Route exact path="/betweencity">
            <BetweenCity />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
