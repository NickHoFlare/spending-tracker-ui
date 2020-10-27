import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './welcome.css';

const Welcome = () => {
  return (
    <Jumbotron className='Welcome-Jumbotron'>
      <h1>Hello World!</h1>
      <span>
        <p>This is my first real React app, please be nice.</p>
      </span>
    </Jumbotron>
  );
};

export default Welcome;
