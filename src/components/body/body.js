import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Profile, About } from '.';

// TODO: Apply bootstrap container to all page content BUT keep header and navbar full-width
// Make the 3 intro things into columns on home page
const Body = () => {
  return (
    <div className="container">
      <Route exact path="/"><Home /></Route>
      <Route path="/profile"><Profile /></Route>
      <Route path="/about"><About /></Route>
    </div>
  )};

export default Body;
