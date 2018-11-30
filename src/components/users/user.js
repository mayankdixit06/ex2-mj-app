import React, { Component } from 'react';


class User extends Component{
    render(){
        return(
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

// ReactDOM.render(<User />, document.getElementById('root'));