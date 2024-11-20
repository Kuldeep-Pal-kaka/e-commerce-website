import React from 'react'
import './Offer.css'
import exclusive_img from'../Assets/Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className="container">

    <div className='Offer'>
     <div className="offer-left">
        <h1>Exclusives</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
     </div>

     <div className="offer-right">
        <img src={exclusive_img} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Offer