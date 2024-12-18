import React from 'react'
import '../breadcrums/BreadCrums.css'
import arrow_icon from '../Assets/Assets/breadcrum_arrow.png'

const BreadCrums = (props) => {
    const {product} = props
  return (
  <div className='BreadCrums'>HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product?.category} <img src={arrow_icon} alt="" /> {product?.name} </div>
  )
}

export default BreadCrums