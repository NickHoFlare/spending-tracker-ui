import React from 'react';
import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';
import './app.scss';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
