import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
function  Header() {


    const[{ basket },dispatch]=useStateValue();

  return (
    <div className='header'>
        <Link to="/">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" className="header_logo" /></Link>
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
            <Link to='/checkout'>
             <div className="header_optionbasket">
                <ShoppingBasketIcon />
                <span className="header_optionlinetwo header_basketcount">{basket?.length} </span>
             </div>
             </Link>
        </div>
    </div>
  );
}

export default Header