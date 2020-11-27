import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar__content'>
        <li>Home</li>
        <li>Profile</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Navbar;
