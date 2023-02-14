import React from 'react'
import CoinItem from './CoinItem'
import './Coin.css'
import { Link } from 'react-router-dom'
import Coin from './Routes/Coin'

function Coins(props) {
  return (
    <>
      <div className="container">
        <div className="contente">
          <div className="head">
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p>Volume</p>
            <p>Details</p>
          </div>
           {
            props.coins.map((coins) => {
              return (
                <Link key={coins.id} to={`/coin/${coins.id}`} element={<Coin />}>
                  <CoinItem coins={coins}/>
                </Link>
              )
            })
           }
        </div>
      </div>
    </>
  )
}

export default Coins