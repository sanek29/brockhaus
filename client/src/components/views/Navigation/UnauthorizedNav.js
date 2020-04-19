import React from "react";
import { NavLink } from 'react-router-dom';

import { Menu } from "antd";

export default class UnauthorizedNav extends React.Component {
  render() {
    return (
      <Menu mode='horizontal' theme='dark'>
        <Menu.Item key="home">
          <NavLink exact to='/'>Home</NavLink>
        </Menu.Item>
        <Menu.Item exact key="register" className='float-right'>
          <NavLink to='/register'>Sign up</NavLink>
        </Menu.Item>
        <Menu.Item key="login" className='float-right'>
          <NavLink exact to='/login'>Sign in</NavLink>
        </Menu.Item>
      </Menu>
    )
  };
};
