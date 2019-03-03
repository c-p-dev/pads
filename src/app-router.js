import React, { Component } from 'react';
import RegisterPage from './pages/register/register';
import LoginPage from './pages/login/login';
import ErrorPage from './pages/error/error';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';

class AppRouter extends Component {
  render() {
    return (
        <BrowserRouter>
            <div> 
                <Switch>
                    <Route path="/register" component={RegisterPage} exact/>
                    <Route path="/login" component={LoginPage}  exact/>
                    <Route path="/" component={LoginPage}  exact/>
                    <Route component={ErrorPage} />
                </Switch>
            </div>
         
           
            
        </BrowserRouter>        
    );
  }
}

export default AppRouter;
