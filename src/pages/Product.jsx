import React, { useContext } from 'react'
import './css/Product.css'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../components/breadcrums/BreadCrums'
import ProductDisplay from '../components/productdisplay/ProductDisplay'
import DiscriptionBox from '../components/discriptionBox/DiscriptionBox'
import RelatedProduct from '../components/Relatedproduct/RelatedProduct'



const Product = () => {
  const {all_products} = useContext(ShopContext)
  const {id}= useParams();
  const product=all_products.find((e)=> e.id==id)

  console.log(product);
  
  return (
    <div Product>
      <BreadCrums product= {product}/>
      <ProductDisplay product={product}/>
      <DiscriptionBox/>
         <RelatedProduct/>
    </div>
  )
}

export default Product
