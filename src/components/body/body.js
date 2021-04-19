import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Save, About, Login } from '../../views';

// TODO: Apply bootstrap container to all page content BUT keep header and navbar full-width
// Make the 3 intro things into columns on home page
const Body = () => {
  return (
    <div className="container">
      <Route exact path="/"><Home /></Route>
      <Route path="/save"><Save /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/login"><Login /></Route>
    </div>
  )};

export default Body;
