import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import NavBar from './Components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar />
            <div className="header__img">
              <img
                src="https://res.cloudinary.com/travdevcloudserver/image/upload/v1531247438/modernBeeTrans.png"
                alt="Logo"
                class="header__img"
              />
            </div>
            {/* <img
              src="https://res.cloudinary.com/travdevcloudserver/image/upload/v1531247438/modernBeeTrans.png"
              className="App-logo"
              alt="logo"
            /> */}
            <h1 className="App-title">Buzzles</h1>
          </header>
          <p className="App-intro">
            <ion-icon name="md-heart" />
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
