import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({id,image,title,price,rating}) {
    const[{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
  return (
    <div className="checkoutproduct">
        <img src={image} alt="" className="checkoutproduct_image" />

        <div className="checkoutproduct_info">
            <p className="checkoutproduct_title">{title}</p>
            <p className="checkoutproduct_price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutproduct_rating">
            {Array(rating).fill().map((_,i)=>(
                <p>🌟</p> 
              ))}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct