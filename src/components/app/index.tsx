import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from "./app";

const Index = () => {
  return(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default Index;
