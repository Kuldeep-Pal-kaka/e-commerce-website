import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon  from'../Assets/Assets/star_icon.png'
import star_dull from '../Assets/Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
  const {product}=props;

const {addToCart} = useContext(ShopContext)

  return (
    <div className='ProductDisplay'>
      
      <div className="productdisplay-left">
       <div className="productdisplay-image-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
       </div>
       <div className="productdisplay-image">
        <img className='productdisplay-main-image' src={product.image} alt="" />
       </div>
      </div>

      <div className="productdisplay-right">
        <h1>  {product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(117)</p>
        </div>
        <div className="productdisplay-right-prices">

          <div className="upperkaro">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new"> ${product.new_price}</div>
          </div>

          <div className="displayright-description">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit.Neque maxime accusantium rerum iste tenetur, laborum nesciunt harumratione molestias atque officiis veritatis aut, ad quo.
          </div>

        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div className='xl'>XL</div>
            <div className='xxl'>XXL</div>
          </div>
        </div>

          <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

          <div className="bottomdescription">
          <p className='productdisplay-right-category'> <span>Category :</span> Women ,T-Shirt , Crop Top</p>
          <p className='productdisplay-right-category'> <span>Tags :</span> Modrens ,Latest </p>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default ProductDisplay