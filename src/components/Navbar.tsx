import React from 'react'
import '../scss/Navbar.scss'
import cartLogo from '../images/cart.png'
import searchLogo from '../images/search.png'

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="container">
        <ul>
          <li><h2>Chanasia</h2></li>
          <li>
            <span className="search-box">
              <input type="text" className="search" placeholder="ค้นหาใน Chanasia" />
              <button type="button" className="btn-nav"><img className="icon" src={searchLogo} alt="search here" /></button>
            </span>
          </li>
          <li>
            <button type="button" className="btn-cart"><img className="icon" src={cartLogo} alt="cart here" /></button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
