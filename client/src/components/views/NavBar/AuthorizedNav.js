import React from "react";
import { Menu } from "antd";
import { withRouter, Link } from 'react-router-dom';


export default class AuthorizedNav extends React.Component {
  state = {
    current: 'history',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode='horizontal' theme='dark'>
        <Menu.Item className='ant-menu-item' key="history">
          <Link to="/history">Bestellliste</Link>
        </Menu.Item>
        <Menu.Item className='ant-menu-item' key="order">
          <Link to="/product/order">order</Link>
        </Menu.Item>
        <Menu.Item className='ant-menu-item' key="logout">
          <Link>logout</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
