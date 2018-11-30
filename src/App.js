import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar/sidebar.js';
import Header from './components/headers/header.js';
import Footer from './components/footers/footer.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
                <SideBar />
                <div class="main-panel">
                    <Header />
                    <div className="content">

                    </div>
                    <Footer />
                </div>
      </div>
    );
  }
}

export default App;
