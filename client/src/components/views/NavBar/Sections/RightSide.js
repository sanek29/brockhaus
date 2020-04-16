import React from "react";
import { Menu } from "antd";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { USER_SERVER } from '../../../Config'
import { withRouter } from 'react-router-dom'


function RightSide(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login")
      }
      else {
        alert('Logout is failed')
      }
    })
  }

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Signup</a>
        </Menu.Item>
      </Menu>
    )
  }
  else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="history">
          <a href="/history">Bestellliste</a>
        </Menu.Item>
        <Menu.Item key="order">
          <a href="/product/order">order</a>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightSide)