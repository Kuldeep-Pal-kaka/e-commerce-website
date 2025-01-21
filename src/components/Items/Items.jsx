import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='item'>
     <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="item-prices">

      <div className="item-price-new">
      <p>${props.new_price} </p> 
      </div>

      <div className="item-price-old">
      <p style={{color:'red'}}> <strike> ${props.old_price} </strike></p>
      </div>

      </div>
    </div>
  )
}

export default Items