import React, { Component } from 'react';
import Header from '../headers/header';
import Footer from '../footers/footer';
import SideBar from '../sidebar/sidebar';

class User extends Component{
    render(){
        return(
            <div className="wrapper">
                <SideBar />
                <div class="main-panel">
                    <Header />
                    <div className="content" id="mainContent">
                        
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default User;