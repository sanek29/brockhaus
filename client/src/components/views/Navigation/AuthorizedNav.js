import React from "react";
import { Menu } from "antd";
import { withRouter, NavLink } from 'react-router-dom';
import { logout } from '~/actions/user';
import { useDispatch } from 'react-redux';

export default function() {
  const dispatch = useDispatch();

  return (
    <Menu mode='horizontal' theme='dark'>
      <Menu.Item key="history">
        <NavLink exact to="/orders">Orders List</NavLink>
      </Menu.Item>
      <Menu.Item key="order">
        <NavLink exact to="/orders/new">Make New Order</NavLink>
      </Menu.Item>
      <Menu.Item className='float-right' key="logout">
        <a onClick={() => dispatch(logout())}>Logout</a>
      </Menu.Item>
    </Menu>
  );
}
