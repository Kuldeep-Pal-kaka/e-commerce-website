import React, { useState   } from 'react'
import './Navbar.css'
import logo from  '../Assets/Assets/logo.png'
import cart_icon from '../Assets/Assets/cart_icon.png'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { useRef } from 'react'
import dropdown from '../Assets/Assets/dropdown.png'

const Navbar = () => {
  const location = useLocation();

  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get(param);
  };

  const tab = getQueryParam('tab');
  const [menu,setMenu] = useState(tab || 'shop');
  const {getTotalCartItems} = useContext(ShopContext);

  const menuref = useRef();

  const dropdowntoggle = (e) =>{
    menuref.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>CK Collections</p>
      </div>

<img className='dropdown' onClick={dropdowntoggle} src={dropdown} alt="" />
      <ul ref={menuref} className='nav-menu'>
       <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none',color:'black'}} to='/?tab=shop'>Shop</Link>    {menu === "shop" ? <hr/> : <></>}</li>
       <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none',color:'black'}} to='/mens?tab=mens'>Mens</Link> {menu === "mens" ? <hr/> : <></>}</li>
       <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none',color:'black'}} to='/womens?tab=womens'>Womens</Link>{menu === "womens" ? <hr/> : <></>}</li>
       <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none',color:'black'}} to='/kids?tab=kids'>Kids</Link>{menu === "kids" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart"> 
      <Link to="/login"><button className='login-button'>Login</button></Link> 
      <Link to="/cart">  <img src={cart_icon} alt="cart-img" /> </Link>
        <div className="nav-cart-count"> {getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
