import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
     <nav className='header'>
        <div>
               <h1>
           <Link to='/' className='logo'>
           My Budget
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
               <Link to ='Add'>Tasks</Link>
                 </li>
            </ul>
            <ul>
            <li>
                  <Link to='/About'>About</Link>
                 </li>
                 
            </ul>
            <ul>
            <li>
                  <Link to='/signup'>Signup</Link>
                </li>
            </ul>
            </div>
    </nav>

    )
};

export default Header
