import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import DetailsPage from '../pages/DetailsPage'
import HomePage from '../pages/HomePage'
import ResultsPage from '../pages/ResultsPage'
import LandingPage from '../pages/LandingPage'
import ImpressumPage from '../pages/ImpressumPage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import Flexbox from 'flexbox-react';

class App extends Component {
  render() {
    return (
      <Flexbox flex="flex" flexDirection="row" flexWrap="wrap" className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/results" component={ResultsPage}/>
        <Route path="/details/:id" component={DetailsPage}/>
        <Route path="/landing" component={LandingPage}/>
        <Route path="/impressum" component={ImpressumPage}/>
        <Route path="/privacy-policy" component={PrivacyPolicyPage}/>
      </Flexbox>
    );
  }
}

export default App;
