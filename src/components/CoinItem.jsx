import React from 'react'
import './Coin.css'
function CoinItem(props , coins) {
  return (
    <>
        <div className="coin-row">
            <p>{props.coins.market_cap_rank}</p>
            <div className="image-coin">
                <img src={props.coins.image} alt="" />
                <p>{props.coins.symbol}</p>
            </div>
            <p>{props.coins.current_price}</p>
            <p>{props.coins.total_volume}</p>
            <button>Details</button>

        </div>
    </>
  )
}

export default CoinItem