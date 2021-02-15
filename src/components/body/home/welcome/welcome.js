import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import cash from '../../../../assets/cash.jpg'
import stonks from '../../../../assets/stonks.png'
import './welcome.scss';

const Welcome = () => {
  return (
    <div className='welcome-jumbotrons'>
      <Jumbotron className='welcome-jumbotron'>
        <h1>Track your spending!</h1>
        <span>
          <p>Keep track of the state of your various banking accounts, and aggregate them to form a complete picture of your savings.</p>
        </span>
        <img className='responsive' src={cash} alt='cash' />
      </Jumbotron>
      <Jumbotron className='welcome-jumbotron right'>
        <h1>Track your investments!</h1>
        <img className='responsive' src={stonks} alt='investments' />
        <span>
          <p>Are you an avid investor? Never get lost in the many exchange codes you hold in so many various different share registries.</p>
        </span>
      </Jumbotron>
      <Jumbotron className='welcome-jumbotron'>
        <h1>Build Savings strategies!</h1>
        <span>
          <p>Looking for a path to FHIR? Calculate your savings rates, and figure out where you can cut your spending to reach your goals! </p>
        </span>
      </Jumbotron>
    </div>
  );
};

export default Welcome;
