import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Save, About, Login } from '../../views';
import './content.scss';

// Make the 3 intro things into columns on home page
const Content = () => {
  return (
    <div className="content">
      <Route exact path="/"><Home /></Route>
      <Route path="/save"><Save /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/login"><Login /></Route>
    </div>
  )};

export default Content;
