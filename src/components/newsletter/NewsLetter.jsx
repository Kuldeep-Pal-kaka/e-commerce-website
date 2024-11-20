import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='NewsLetter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe To Our Newsletter && Stay Updated</p>
        <div className="email">
         <input type="email" placeholder='Your Email Id' />
        <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter