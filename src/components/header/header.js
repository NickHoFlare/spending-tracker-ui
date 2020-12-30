import React from 'react';
import Navbar from './navbar/navbar';
import logo from '../../assets/logo.png';
import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__banner'>
        <img className='responsive' src={logo} alt='logo' />
        <h1 className='header__message'>Spending Tracker</h1>
        <span>
          By: <a href='https://github.com/terran324'>terran324</a>
        </span>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
