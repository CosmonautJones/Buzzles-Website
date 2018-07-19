import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import HomepageLayout from './Components/Homepage';
// import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <HomepageLayout />
          {/* <header className="App-header">
            <NavBar />
            <div className="header">
              <img
                src="https://res.cloudinary.com/travdevcloudserver/image/upload/v1531247438/modernBeeTrans.png"
                alt="Logo"
                class="header__img"
              />
              <h1 className="App-title">BUZZLES</h1>
            </div>
          </header>
          <p className="App-intro">
            <ion-icon name="md-heart" />
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
