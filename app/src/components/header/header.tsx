import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import './header.scss';

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo-title">
        <img src={logo} className="logo" alt="Logo" />
        <p className="title">Spendless</p>
      </div>
      <ul className="menu">
        <li className="option">
          <Link to="/">Home</Link>
        </li>
        <li className="option">
          <Link to="/save">Save</Link>
        </li>
        <li className="option">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="login">
        <Link to="/login"><FontAwesomeIcon icon={faKey} /> Login</Link>
      </div>
    </div>
  );
};

export default Header;
