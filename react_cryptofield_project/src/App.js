import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import CryptoCurrencies from "./pages/CryptoCurrencies";
import CryptoDetails from "./pages/CryptoDetails";
import News from './pages/News';
import Upnavbar from "./upnavbar/Upnavbar";
import Footer from "./footer/Footer";

const App = () => {
  return(
    <div>
      <div className="navbar">
        <Upnavbar/>
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />    
          </Route>
          <Route exact path="/cryptocurrencies">
            <CryptoCurrencies />
          </Route>
          <Route exact path="/coin/:uuid">
            <CryptoDetails />
          </Route>
          <Route exact path="/news">
            <News/>
          </Route>
        </Switch>
      </div>
      <div className="footer-page">
        <Footer />
      </div>
    </div>
  );
};

export default App;
