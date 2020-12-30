import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './welcome.scss';

const Welcome = () => {
  return (
    <Jumbotron className='welcome-jumbotron'>
      <h1>Hello World!</h1>
      <span>
        <p>This is my first real React app, please be nice.</p>
      </span>
    </Jumbotron>
  );
};

export default Welcome;
