import React, { useContext, useEffect, useState } from 'react'
import '../pages/css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import Items from '../components/Items/Items'
import dropdown_icon from '../components/Assets/Assets/white-dropdown.png'


const Shopcatogary = (props) => {

  const { all_products } = useContext(ShopContext)
  const [filterProducts, setFilterProducts] = useState(all_products || [])

  const [sortType, setSortType] = useState('relevant')


  const sortProduct = () => {


    switch (sortType) {
      case 'low-high':
        setFilterProducts([...all_products].sort((a, b) => a.new_price - b.new_price));
        break;
      case 'high-low':
        setFilterProducts([...all_products].sort((a, b) => b.new_price - a.new_price));
        break;
      default:
        console.log("Sort type not valid");
    }
  };

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className='Shop-catogary'>

      <img className='shopcategory-banner' src={props.banner} alt="" />

      <div className="shopcategory-indexSort">
        <p><span>Showing 1-12 </span>Out Of 36 Products</p>

        <div className="shopcategory-Sort">
  <div className="select-wrapper">
    <select onChange={(e) => setSortType(e.target.value)} className="custom-select">
      <option value="relevant">Sort By: Relevant</option>
      <option value="low-high">Sort By: Low To High</option>
      <option value="high-low">Sort By: High To Low</option>
    </select>
    <img src={dropdown_icon} alt="Dropdown Icon" className="dropdown-icon" />
  </div>
</div>


</div>

      <div className="shopcategory-products">
        {filterProducts.map((item, i) => {
          if (props.category === item.category) {
            return <Items key={i} id={item.id} name={item.name}
              image={item.image} new_price={item.new_price}
              old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>

    </div>
  )
}

export default Shopcatogary
