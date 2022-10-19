import React from "react";
import '../App.css';
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="row">
            <div className="footer-container">
                <h3 className="page-tit">CryptoField</h3>
                <h3 className="right-tit">All rights reserved</h3>
                <p>
                    <Link to="/">Home</Link> |
                    <Link to="/cryptocurrencies">CryptoCurrencies</Link> |
                    <Link to="/news">News</Link>
                </p>
            </div>
        </div>
    )
}

export default Footer;