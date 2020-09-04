import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auto from "./Autocomplete";
import "./App.scss";
import InsideOrBetweenCity from "./InsideOrBetweenCity";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Auto />
          </Route>
          <Route exact path="/insideorbetween">
            <InsideOrBetweenCity />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
