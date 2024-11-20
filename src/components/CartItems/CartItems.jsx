import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/Assets/cart_cross_icon.png'
const CartItems = () => {

  const { gettotalcartamount, all_products, cartItems, removeFromCart } = useContext(ShopContext)
  return (
    <div className='cartItems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => (
  cartItems[e.id] > 0 ? (
    <div key={e.id}>
      <div className="CartItems-format cartitems-format-main">
        <img className='carticon-product-icon' src={e.image} alt="" />
        <p>{e.name}</p>
        <p>${e.new_price}</p>
        <button className='Cartitem-Quantity'>{cartItems[e.id]}</button>
        <p>${e.new_price * cartItems[e.id]}</p>
        <img 
          className='cartitem-remove-icon' 
          src={remove_icon} 
          onClick={() => { removeFromCart(e.id) }} 
          alt="" 
        />
      </div>
      <hr />
    </div>
  ) : null
))}

      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Totals</h1>

          <div>

            <div className="cartitem-total-items">
              <p>Subtotal</p>
              <p>${gettotalcartamount()}</p>
            </div>

            <hr />
            <div className="cartitem-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-items">
              <h3>Total</h3>
              <h3>${gettotalcartamount()}</h3>
            </div>

          </div>
          <button>PROCEED TO CHECKOUT</button>

        </div>
        <div className="cartitems-promocode">
          <p>If You Have A Promocode, Enter It Here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder='Promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems