import React, { useState } from 'react';
import { cash, stonks, aud } from '../../assets';
import Carousel from 'react-bootstrap/Carousel';
import './home.scss';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="mt-4">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cash}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Track your spending!</h3>
            <p>Keep track of the state of your various banking accounts, and aggregate them to form a complete picture of your savings.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={stonks}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Track your investments!</h3>
            <p>Are you an avid investor? Never get lost in the many exchange codes you hold in so many various different share registries.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={aud}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Build Savings strategies!</h3>
            <p>Looking for a path to FHIR? Calculate your savings rates, and figure out where you can cut your spending to reach your goals!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
};

export default Home;
