import React from 'react';
import './App.css';
import Navbar from './components/navi/Navbar';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from "./components/pages/Home";
import Services from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Services';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/sign-up" exact component={SignUp}/>
        
      </Switch>
    </BrowserRouter>
    
    </>
  );
}

export default App;
