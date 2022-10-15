import React from 'react';
import './Signin.css';

const Signin = () => {
  return (
    <body className='body'>
      <div className='box'>
        <div className='form'>
          <h2>Login</h2>
          <div className='inputBox'>
            <input type='text' required='required'></input>
            <span>User name</span>
          <i></i>
          </div>
          <div className='inputBox'>
            <input type='Password' required='required'></input>
            <span>Password</span>
            <i></i>
          </div>

          <div className='links'>
          <a href=''>Forgot Password</a>
          <a href='Signup'>Signup</a>
          </div>
          <input type ='submit' value='Login'></input>
        </div>
      </div>
    </body>
  )
}

export default Signin