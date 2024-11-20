import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Assets/hand_icon.png'
import arrow_icon from '../Assets/Assets/arrow.png'
import hero_img from '../Assets/Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
       <div className="hero-left">
      <h2>New Arrivals Only</h2>
      <div>
<div className="hero-hand-icon">
    <p>New</p>
    <img src={hand_icon} alt="" />
</div>
<div className='pera'>
<p>Collection</p>
<p>For Everyone</p>
</div>


<div>
    <div className="hero-latest-btn">
        <div>
            Latest Collection
        </div>
        <img src={arrow_icon} alt="" />
          
    </div>
</div>
      </div>
       </div>

       <div className="hero-right">
        <img src={hero_img} alt="" />

</div>
    </div>
  )
}

export default Hero