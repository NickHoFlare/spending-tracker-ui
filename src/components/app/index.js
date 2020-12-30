import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from "./app.js";

const Index = () => {
  return(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default Index;
