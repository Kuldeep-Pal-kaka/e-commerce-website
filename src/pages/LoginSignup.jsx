import React, { useState } from 'react'
import './css/LoginSignup.css'
import { Form } from 'antd'
import Input from 'antd/es/input/Input'



const LoginSignup = () => {

const [action,setAction] = useState("Login");

const [formData, setFormData] = useState({
  username: "",
  password: "",
  email: ""

})

const changeHandler = (e)=>{

  setFormData({...formData , [e.target.name]:[e.target.value]} )

}


const login = async ()=>{

  console.log("login function executed", formData);
  
  

}

const signup = async ()=>{

  console.log("signup function executed",formData);
  let responseData;
  await fetch('http://localhost:3000/signup',{
    method:'POST',
    headers:{
      Accept:'application/form-data',
      'Content-Type':'application/json',
    },

    body: JSON.stringify(formData),

  }).then((response)=> response.json()).then((data)=>responseData=data)

  if(responseData.success){
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace("/")
  }
  
}

  return (

    <div className='LoginSignup'>
      <Form>
      <div className="LoginSignup-container">
        <h1>{action}</h1>
        <div className="underline"></div>
        <div className="LoginSignup-fields">
          {action === "Sign Up" ? <div>
          <Form.Item rules={[{
            required:true,
            message:"please enter your name" }
            ]}> <Input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name'/> </Form.Item> </div> : <div></div>}
         <Form.Item rules={[{
            required:true,
            message:"please enter your name" }
            ]}> <Input type="email" name='email'  value={formData.email} onChange={changeHandler} placeholder='Your email'/> </Form.Item>
                  <Form.Item rules={[{
            required:true,
            message:"please enter your name" }
            ]}> <Input type="password" name='password'  value={formData.password} onChange={changeHandler} placeholder='Your password'/> </Form.Item>
        </div>
        <button onClick={()=>{action==="Login"?login():signup()}}>Continue</button>
        <p className="LoginSignup-login"> 
          {action === "Sign Up" ?<p>Already have an account? <span onClick={()=>setAction("Login")}>Login Here</span></p>
          :<p>Create an account? <span onClick={()=>setAction("Sign Up")}>Click Here</span></p>}
           </p>
        <div className="LoginSignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, I agree to the terms of use & policy.</p>
        </div>
      </div>
      </Form>
    </div>

  )
}

export default LoginSignup
