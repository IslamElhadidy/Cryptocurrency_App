import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Coin.css'
import DOMPurify from 'dompurify'
function Coin() {
    const params = useParams()
    const [coin,setCoin] = useState({})
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`




    useEffect(() => {
        axios.get(url).then(res => {
            setCoin(res.data)
        })
    })
  return (
    <div className='details'>
        <div className="container">

            <div className="content">
                <h1>{coin.name}</h1>
            </div>
            <div className="content">
                <div className="rank">
                    <span>Rank # {coin.market_cap_rank}</span>
                </div>
                <div className="info">
                    <div className="heading">
                        {
                            coin.image ? <img src={coin.image.small} alt="" /> : null
                        }
                        <p>{coin.name}</p>
                        <p>({coin.symbol}/USD)</p>
                        
                    </div>
                    <div className="price">
                        {
                          coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd}</h1> : null
                        }
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="about">
                    <h3>About</h3>
                    
                      <p dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(coin.description ? coin.description.en : null),
                      }}>
                      </p>
                    
                </div>
            </div>
            <div className="content">
                <Link to='/'>
                      <h1 className='text-secondary'>Back</h1>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Coin