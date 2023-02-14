import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import Coin from "./components/Routes/Coin";
import './components/style.css'

function App() {
  const [coins,setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
  
  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data)
      console.log(res.data);
    })
  },[])
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
        
    </div>
  );
}

export default App;
