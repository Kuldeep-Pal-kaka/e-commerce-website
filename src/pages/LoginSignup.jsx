import React from 'react'
import './css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
      <div className="LoginSignup-container">
        <h1>Signup</h1>
        <div className="LoginSignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="LoginSignup-login">
          Already Have An Account <span>Login Here</span>
        </p>
        <div className="LoginSignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, I Agree To Your Terms Of Use Privacy Policy</p>
        </div>

      </div>
      
    </div>
  )
}

export default LoginSignup
