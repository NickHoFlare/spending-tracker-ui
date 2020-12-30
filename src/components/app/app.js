import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import Home from '../body/home/home';
import Profile from '../body/profile/profile';
import About from '../body/about/about';

import './app.scss';

const App = () => {
  return (
      <div className='App'>
        <Header />
          <Route exact path="/"><Home /></Route>
          <Route path="/profile"><Profile /></Route>
          <Route path="/about"><About /></Route>
        <Footer />
      </div>
  );
};

export default App;
