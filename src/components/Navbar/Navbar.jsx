import React, { useState   } from 'react'
import './Navbar.css'
import logo from  '../Assets/Assets/logo.png'
import cart_icon from '../Assets/Assets/cart_icon.png'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
const Navbar = () => {

  const location = useLocation();

  // Create a function to parse query parameters from the URL
  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get(param);
  };

  // Get the value of 'tab' query parameter
  const tab = getQueryParam('tab');


  const [menu,setMenu] = useState(tab || 'shop');
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>CK Collections</p>
      </div>

      <ul className='nav-menu'>

       <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none',color:'black'}} to='/?tab=shop'>Shop</Link>    {menu === "shop" ? <hr/> : <></>}</li>
       <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none',color:'black'}} to='/mens?tab=mens'>Mens</Link> {menu === "mens" ? <hr/> : <></>}</li>
       <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none',color:'black'}} to='/womens?tab=womens'>Womens</Link>{menu === "womens" ? <hr/> : <></>}</li>
       <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none',color:'black'}} to='/kids?tab=kids'>Kids</Link>{menu === "kids" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart"> 
      <Link to="/login"><button>Login</button></Link> 
      <Link to="/cart">  <img src={cart_icon} alt="cart-img" /> </Link>
        <div className="nav-cart-count">
        {getTotalCartItems()}
        </div>
      </div>
    </div>
  )
}

export default Navbar


// import React, { useState, useEffect } from 'react';
// import './Navbar.css';
// import logo from '../Assets/Assets/logo.png';
// import cart_icon from '../Assets/Assets/cart_icon.png';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const location = useLocation();
  
//   // State to track the active menu item, which will be updated based on location
//   const [menu, setMenu] = useState("");

//   useEffect(() => {
//     // Check the current pathname and update the menu state accordingly
//     if (location.pathname === '/') {
//       setMenu("shop");
//     } else if (location.pathname === '/mens') {
//       setMenu("mens");
//     } else if (location.pathname === '/womens') {
//       setMenu("womens");
//     } else if (location.pathname === '/kids') {
//       setMenu("kids");
//     }
//   }, [location]);  // Runs every time the URL changes

//   return (
//     <div className='navbar'>
//       <div className="nav-logo">
//         <img src={logo} alt="" />
//         <p>CK Collections</p>
//       </div>

//       <ul className='nav-menu'>
//         <li>
//           <Link style={{ textDecoration: 'none' }} to='/'>
//             Shop
//           </Link>
//           {menu === "shop" ? <hr /> : <></>}
//         </li>
//         <li>
//           <Link style={{ textDecoration: 'none' }} to='/mens'>
//             Mens
//           </Link>
//           {menu === "mens" ? <hr /> : <></>}
//         </li>
//         <li>
//           <Link style={{ textDecoration: 'none' }} to='/womens'>
//             Womens
//           </Link>
//           {menu === "womens" ? <hr /> : <></>}
//         </li>
//         <li>
//           <Link style={{ textDecoration: 'none' }} to='/kids'>
//             Kids
//           </Link>
//           {menu === "kids" ? <hr /> : <></>}
//         </li>
//       </ul>

//       <div className="nav-login-cart">
//         <Link to="/login"><button>Login</button></Link>
//         <Link to="/cart">
//           <img src={cart_icon} alt="cart-img" />
//         </Link>
//         <div className="nav-cart-count">
//           0
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
