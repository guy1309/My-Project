import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <body className='body2'>
    <div className='box2'>
      <div className='form2'>
        <h2>Contact us</h2>
        
        <div className='inputBox'>
          <h3>phone number: 09-5762441</h3>
        <i></i>
        </div>
        <div className='inputBox'>
          <h3>email: MyBudget@gmail.com</h3>
          <i></i>
        </div>

        <div className='inputBox2'>
        <input type='text' required='required'></input>
            <span>text us</span>
          <i></i>
        </div>

        <div>
        <input type ='submitt' value='Send'></input>
        </div>
         
        </div>
      </div>
    </body>
  )
}

export default Contact;