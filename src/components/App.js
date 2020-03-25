import React, {Suspense} from 'react'

import LandingPage from "./views/LandingPage/LandingPage.js";
//import LoginPage from "./views/LoginPage/LoginPage.js";
//import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"

function App() {
    return (
        <Suspense fallback={(<div>Loading...</div>)}>
            <NavBar />
            <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
            </div>
            <Footer />
        </Suspense>
    );
  }
  
  export default App;