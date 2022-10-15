import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
     <header className='header'>
        <div>
               <h1>
           <Link to='/' className='logo'>
           My recipe book
          </Link>
               </h1>
        </div>
        <div className='hedaer-Links'>
           <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
            </ul>
            <ul>
            <li>
               <Link to ='Add'>Add</Link>
                 </li>
            </ul>
            <ul>
                 <li>
                  <Link to='/signup'>Signup</Link>
                </li>
            </ul>
            <ul>
            <li>
                  <Link to='/Signin'>Members</Link>
                 </li>
            </ul>
        </div>
    </header>

    )
};

export default Header
