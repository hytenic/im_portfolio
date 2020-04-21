import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutMe from './AboutMe'

export default () => (
    <Router>
      <Route path="/aboutMe" component={AboutMe} />
    </Router>
  )