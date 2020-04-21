import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutMe from './AboutMe'
import Main from './Main'
import Footer from './Footer'

export default () => (
    <Router>
      <Route path="/aboutMe" component={AboutMe} />
      <Route exact path="/" component={Main} />
      <Route exact path="/" component={Footer} />
    </Router>
  )