import React, {useState} from "react";
import moment from "moment";
import './News.css';
import '../App.css';

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";


const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';


const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const {data: cryptoNews} = useGetCryptoNewsQuery({ newsCategory, count : simplified ? 3 : 12});
 
  
  if(!cryptoNews?.value) return 'Loading...';
  return(
    <div className="page">
      <div className="row back">
        {cryptoNews.value.map((news, i) => (
          <div className="news-width" key={i}> 
            <div className="new-card-contain box-height">
              <a href={news.url} target="_blank" rel="noreferrer" className="new-link">
                <div className="new-card-content">
                  <div className="row">  
                    <div className="col-8 new-card-title">
                      {news.name}
                    </div>
                    <div className="col-4">
                      <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" className="new-card-icon" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 new-card-found">
                    <img src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="found" className="new-found-icon"/>
                      <p className="new-card-foundation-text">
                        {news.provider[0]?.name}
                      </p>
                    </div>
                    <div className="col-6 new-card-date">
                      <p>{moment(news.datePublished).startOf('ss').fromNow()}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>  
  )
}

export default News;