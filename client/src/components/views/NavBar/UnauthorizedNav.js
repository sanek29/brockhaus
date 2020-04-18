import React from "react";
import { Menu } from "antd";
import { Link } from 'react-router-dom';

const handleClick = e => {
  this.setState({
    current: e.key,
  });
};

export default class UnauthorizedNav extends React.Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode='horizontal' theme='dark'>
        <Menu.Item key="home">
          <Link to='/login'>Home</Link>
        </Menu.Item>
        <Menu.Item key="signin">
          <Link to='/login'>Signin</Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link to='/register'>Signup</Link>
        </Menu.Item>
      </Menu>
    )
  };
};
