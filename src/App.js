import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import Actions from './components/Actions';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <LandingPage />
          <Actions />
      </div>
    );
  }
}

export default App;
