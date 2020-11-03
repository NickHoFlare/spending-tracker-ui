import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='header-message'>Spending Tracker</h1>
      <span>
        By: <a href='https://github.com/terran324'>terran324</a>
      </span>
    </div>
  );
};

export default Header;
