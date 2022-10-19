import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';

import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

import '../App.css';
import './CryptoDetails.css';


const CryptoDetails = () => {
  const { uuid } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(uuid);
  
  const cryptoDetails = data?.data?.coin;

  if(isFetching) return 'Loading...';

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`},
    { title: 'Rank', value: cryptoDetails?.rank},
    { title: '24h Volume', value: `$ ${cryptoDetails?.["24hVolume"] && millify(cryptoDetails?.["24hVolume"])}`},
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`},
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`},
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets,},
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges,},
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed},
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`},
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`},
  ];
  return (
    <div className='info-back'>
      <div className='crypto-detail-container'>
        <div className='row'>
          <div className='crypto-detail-heading-container'>
            <p className='crypto-detail-title'>{data?.data?.coin.name}</p>
          </div>
        </div>

        <div className='row'>
          <div className='subtitle-container'>
            <p className='subtitle'>{data?.data?.coin.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
          </div>
        </div>

        <div className='row'>
          <div className='value-statistic-container'>
            <div className='value-statistic-title-container'>
              <p className='value-statistic-title'>{data?.data?.coin.name} Value Statistics</p>
              <p className='value-statistic-mid-text'>An overview showing the statistic of {data?.data?.coin.name}</p>
            </div>
            <div className='table-container'>
              <table className='value-table'>
                {stats.map(({title, value}) => (
                  <tr>
                    <td>{title}</td>
                    <td className='equal-right'>{value}</td>
                  </tr>
                ))}
              </table>
            </div>   
          </div>

          <div className='value-statistic-container'>
            <div className='value-statistic-title-container'>
              <h1 className='value-statistic-title'>Other Statistics</h1>
              <p className='value-statistic-mid-text'>An overview showing the statistic of all cryptocurrencies</p>
            </div>
            <div className='table-container'>
              <table className='value-table'>
                {genericStats.map(({title, value}) => (
                  <tr>
                    <td>{title}</td>
                    <td className='equal-right'>{value}</td>
                  </tr>
                ))}
              </table>
            </div>   
          </div>    
        </div>

        <div className='row'>
          <div className='what-area-container'>
            <div className='what-area-title-container'>
              <h1 className='what-area-title'>What is {data?.data?.coin.name}</h1>
            </div>
            <div className='description-container'>
              {HTMLReactParser(data?.data?.coin.description)} 
            </div>
          </div>
          
          <div className='links-container'>
            <div className='links-title-container'>
              <p className='links-title'>{cryptoDetails.name} Links</p>
            </div>
             
            <div className='links-table-container'>
              <table className='links-table'>
                {cryptoDetails.links.map((link) => (
                  <tr key={link.name}>
                    <td className='td-links-left'>{link.type}</td>
                    <td className='td-links-right'><a href={link.url} target="_blank" rel="noreferrer" className='coin-links'>{link.name}</a></td>
                  </tr>
                ))}
              </table>
            </div> 
          </div>
        </div> 
      </div>
    </div>
  )
}

export default CryptoDetails