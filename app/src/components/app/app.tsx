import React from 'react';
import Header from '../header/header';
import Content from '../content/content';
import Footer from '../footer/footer';
import './app.scss';

const App = () => {
  return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
  );
};

export default App;
