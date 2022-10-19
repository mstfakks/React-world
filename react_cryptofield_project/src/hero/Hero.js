import React from "react";
import '../App.css';
import './Hero.css';

import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import CryptoCurrencies from "../pages/CryptoCurrencies";
import { Link } from "react-router-dom";
import News from "../pages/News";

const Hero = () => {
    const {data, isFetching} = useGetCryptosQuery(4);
    const generalStat = data?.data?.stats;
    
    if(isFetching) return 'Loading...';
    return(
        <div>
            <video src={require('../videos/btc2.mp4')} autoPlay loop muted  />
            <div className="row">
                <div className="full-contain">
                    <h1 className="hero-title">CRYPTOFIELD</h1>
                </div>
            </div>

            <div className="row">
                <div className="full-contain">
                    <h3 className="hero-text">EVERYTHING ABOUT IT COIN</h3>
                </div>
            </div>

            <div className="row">
                <div className="full-contain">
                    <h1 className="stats-title">GLOBAL CRYPTO STATS</h1>
                </div>
            </div>

            <div className="row" id="props-area">
                <div className="col-6 prop-area">
                    <p className="prop-text">Total Crypto Currencies:</p>
                    <h2 className="prop-text-right">{generalStat.total}</h2>
                    <p className="prop-text">Total Market Cap:</p>
                    <h2 className="prop-text-right">{millify(generalStat.totalMarketCap)}</h2>
                    <p className="prop-text">Total Markets:</p>
                    <h2 className="prop-text-right">{millify(generalStat.totalMarkets)}</h2>
                </div>
                <div className="col-6 prop-area">
                    <p className="prop-text">Total Exchanges:</p>
                    <h2 className="prop-text-right">{millify(generalStat.totalExchanges)}</h2>
                    <p className="prop-text">Total 24h Volume:</p>
                    <h2 className="prop-text-right">{millify(generalStat.total24hVolume)}</h2>
                    <p className="prop-text">Total Cryptocurrencies:</p>
                    <h2 className="prop-text-right">{generalStat.total}</h2>
                </div>
            </div>


            <div className="row">
                <div className="full-contain cryptos">
                    <h1 className="trend-text">TOP 4 CRYPTOS IN THE WORLD</h1>
                    <Link to="/cryptocurrencies">
                        <p className="button">
                            <button className="btn">Show More</button>
                        </p>
                    </Link>
                    <CryptoCurrencies simplified/>
                </div>
            </div>

            <div className="row">
                <div className="full-contain news">
                    <h1 className="news-text">NEWS</h1>
                    <Link to="/news">
                        <p className="button">
                            <button className="btn">Show More</button>
                        </p>
                    </Link>
                    <div style={{marginTop:'20px'}}>
                        <News simplified/>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Hero;