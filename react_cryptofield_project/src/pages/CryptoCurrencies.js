import React, {useState, useEffect} from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import './CryptoCurrencies.css';
import '../App.css';

import { useGetCryptosQuery } from "../services/cryptoApi";



const CryptoCurrencies = ({ simplified }) => {
    const count = simplified ? 4 : 100;
    const {data: cryptoList, isFetching} = useGetCryptosQuery(count)
    const [crypto, setCrypto] = useState(cryptoList?.data?.coins);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const filterData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
        setCrypto(filterData);
    },[cryptoList, searchTerm])
    
    if(isFetching) return 'Loading...';
    return(
        <div className="cart-bckgrnd">
            {!simplified && (
                <div className="row">
                    <div className="input-contain">
                        <div className="input-container">
                            <input type="text"  placeholder="Search Crypto" onChange={(e) => setSearchTerm(e.target.value)} />
                        </div>
                    </div>
                </div>
            )}
            <div className="row">
                {crypto?.map((currency) => (
                    <div className="card-contain" key={currency.uuid}>
                        <div className="card-container">
                            <Link to={`/coin/${currency.uuid}`}>
                                <div className="card">
                                    <p className="imag">
                                        <img src={currency.iconUrl} alt="coin" className="coin-image" />
                                    </p>
                                    <div className="card-text-container">
                                        <h2 className="coin-title">{`${currency.rank}. ${currency.name}`}</h2>
                                        <h4 className="coin-price">Price: {millify(currency.price)}</h4>
                                        <h4 className="coin-market">Market Cap: {millify(currency.marketCap)}</h4>
                                        <h4 className="coin-change">Daily Change: {millify(currency.change)}%</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CryptoCurrencies;