import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import './header.scss';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Spending Tracker"
        />
        Spending Tracker
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" >Home</Nav.Link>
        <Nav.Link as={Link} to="/save" >Save</Nav.Link>
        <Nav.Link as={Link} to="/about" >About</Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link to="/login"><FontAwesomeIcon icon={faKey} /> Login</Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
