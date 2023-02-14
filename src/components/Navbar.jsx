import React from 'react'
import './style.css'
import {FaCoins} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <Link to='/' className='text-text-decoration-none'>
        <div className="navbar">
            <FaCoins className='icon' />
            <h1>Coin <span>Search</span></h1>
        </div>
    </Link>
  )
}

export default Navbar