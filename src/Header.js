import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function  Header() {
  return (
    <div className='header'>
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" className="header_logo" />
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon"/>
        </div>
        <div className="header_nav">
             <div className="header_option">
                <span className="header_optionlineone">Hello guest</span>
                <span className="header_optionlinetwo">Sign In</span>
             </div>
             <div className="header_option">
                <span className="header_optionlineone">Return</span>
                <span className="header_optionlinetwo">&Order</span>
             </div>
             <div className="header_option">
                <span className="header_optionlineone">Your</span>
                <span className="header_optionlinetwo">Prime</span>
             </div>

             <div className="header_optionbasket">
                <ShoppingBasketIcon />
                <span className="header_optionlinetwo header_basketcount">0</span>
             </div>
        </div>
    </div>
  )
}

export default Header