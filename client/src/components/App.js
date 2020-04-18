import React from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from '../hoc/auth';

import { Layout } from 'antd';

import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import OrderPage from './views/OrderPage/OrderPage';
import HistoryPage from './views/HistoryPage/HistoryPage';

const { Header, Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header>
          <NavBar/>
        </Header>
        <Content className='flex-center'>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)}/>
            <Route exact path="/login" component={Auth(LoginPage, false)}/>
            <Route exact path="/register" component={Auth(RegisterPage, false)}/>
            <Route exact path="/product/order" component={Auth(OrderPage, true)}/>
            <Route exact path="/history" component={Auth(HistoryPage, true)}/>
          </Switch>
        </Content>
        <Footer/>
      </Layout>
    );
  }
}

export default App;
