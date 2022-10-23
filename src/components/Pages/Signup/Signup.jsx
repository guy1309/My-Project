import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <body className='body1'>
      <div className='box1'>
        <div className='form1'>
          <h2>Signup</h2>
          <div className='inputBox1'>
            <input type='text' required='required'></input>
            <span>User name</span>
          <i></i>
          </div>
          <div className='inputBox1'>
            <input type='Password' required='required'></input>
            <span>Password</span>
            <i></i>
          </div>
          <div className='inputBox1'>
            <input type='Email' required='required'></input>
            <span>Email</span>
            <i></i>
          </div>
       

          
          <div className='links1'>
          <a href='About'>more about us</a>
          <a href='Contact'>contact us</a>
          </div>
          <input type ='submitt' value='signup'></input>
        </div>
      </div>
    </body>
  )
}

export default Signup