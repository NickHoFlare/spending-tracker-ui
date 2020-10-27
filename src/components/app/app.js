import React from 'react';
import Header from '../header/header';
import Welcome from '../welcome/welcome';
import './app.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Welcome />
    </div>
  );
};

export default App;
