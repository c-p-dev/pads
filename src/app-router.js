import React, { Component } from 'react';
import RegisterPage from './pages/register/register';
import LoginPage from './pages/login/login';
import ErrorPage from './pages/error/error';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import './styles/custom.scss';
import bg from './assets/sample_background_texture.png';

class AppRouter extends Component {
  render() {
    return (
        // <BrowserRouter>
        //     <div> 
        //         {/* <Switch> */}
        //             <Route path="/register" component={RegisterPage} exact/>
        //             <Route path="/login" component={LoginPage}  exact/>
        //             {/* <Route path="/" component={LoginPage}  exact/> */}
        //             {/* <Route component={ErrorPage} /> */}
        //         {/* </Switch> */}
        //     </div>
         
           <p>dd</p>
        // <img src={bg} alt="Logo" />
        // </BrowserRouter>        
    );
  }
}

export default AppRouter;
