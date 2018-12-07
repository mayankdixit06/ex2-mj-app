import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import User from './components/users/user';
import SignIn from './components/signin/signin'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <SignIn />
            </div>
          )}/>
          <Route exact={true} path='/signin' render={() => (
            <div className="App">
              <SignIn />
            </div>
          )}/>
          <Route exact={true} path='/user' render={() => (
            <div className="App">
              <User />
            </div>
          )}/>
          {/* <Route exact={true} path='/signup' render={() => (
            <div className="App">
              <SignUp />
            </div>
          )}/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
