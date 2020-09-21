import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import "./App.scss";
import InsideCity from "./components/insidethecity/InsiteCity";
import InsideOrBetweenCity from "./InsideOrBetweenCity";
import SearchFunction from "./components/insidethecity/SearchFunction";
import ShowDataContainer from "./components/insidethecity/ShowDataContainer";
import Footer from "./components/insidethecity/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import SenegalMap from "./components/SenegalMap";
import Contact from "./components/Contact";
import Transport from "./components/Transport";
import BetweenCity from "./components/betweencity/BetweenCity";
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
           
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/mapofsenegal">
            <SenegalMap/>
          </Route>
          <Route exact path="/contact">
          <Contact/>
          </Route>
          <Route exact path="/transport">
            <Transport/>
          </Route>


          <Route exact path="/city/">
            <SearchFunction />
          </Route>
          <Route exact path="/insideorbetween">
            <InsideOrBetweenCity />
          </Route>

          <Route exact path="/insidecity">
            <InsideCity />
          </Route>
          <Route exact path="/betweencity">
            <BetweenCity/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
