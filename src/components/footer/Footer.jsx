import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Assets/logo_big.png'
import instagram_icon from '../Assets/Assets/instagram_icon.png'
import pintrest_icon from '../Assets/Assets/pintester_icon.png'
import whatapp_icon from'../Assets/Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='Footer'>
     <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>CK COLLECTIONS</p>


     </div>
     <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
     </ul>
     <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatapp_icon} alt="" />
        </div>

     </div>
     <div className="footer-copyright">
        <hr />
        <p>Copyright@2024 All Rights Reserved</p>
     </div>
    </div>
  )
}

export default Footer