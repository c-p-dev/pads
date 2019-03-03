import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bg from './assets/sample_background_texture.png';

import RegisterPage from './pages/register/register';
import LoginPage from './pages/login/login';
import {BrowserRouter, Route} from "react-router-dom";
import AppRouter from './app-router';
class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
        </div> 
    );
  }
}

export default App;
