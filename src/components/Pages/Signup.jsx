import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <body className='body'>
      <div className='box'>
        <div className='form'>
          <h2>Signup</h2>
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
          <div className='inputBox'>
            <input type='Email' required='required'></input>
            <span>Email</span>
            <i></i>
          </div>
       


          <div className='links'>
          <a href=''>more about us</a>
          <a href=''>contac with us</a>
          </div>
          <input type ='submit' value='signup'></input>
        </div>
      </div>
    </body>
  )
}

export default Signup