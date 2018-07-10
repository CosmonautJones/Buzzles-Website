import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
      <Menu inverted className="ui.menu">
        <Menu.Item>
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/Locations">Locations</NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
