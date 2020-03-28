import React, {Suspense} from 'react'
import {Route, Switch} from "react-router-dom"

import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"

function App() {
    return (
        <Suspense fallback={(<div>Loading...</div>)}>
            <NavBar />
            <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route> 
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/register">
                        <RegisterPage />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </Suspense>
    );
  }
  
  export default App;