import React, { Component } from 'react';
import Header from '../headers/header';
import Footer from '../footers/footer';
import SideBar from '../sidebar/sidebar';

class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    componentDidMount() {
        fetch("http://172.17.1.50:3000/api/users")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.data
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render(){
        const { error, isLoaded, items } = this.state;
        if (error) {
            return (
            <div className="wrapper">
                <SideBar />
                <div class="main-panel">
                    <Header />
                    <div className="content" id="mainContent">                   
                        Error: {error.message}     
                    </div>
                    <Footer />
                </div>
            </div>                
            );
        } else if (!isLoaded) {
            return(
            <div className="wrapper">
                <SideBar />
                <div class="main-panel">
                    <Header />
                    <div className="content" id="mainContent">                   
                    <div>Loading...</div>  
                    </div>
                    <Footer />
                </div>
            </div>
            
        );             
          } else {
            return (
                <div className="wrapper">
                    <SideBar />
                    <div class="main-panel">
                        <Header />
                        <div className="content" id="mainContent">                   
                            <ul>
                                {items.map(item => (
                                <li key={item.id}>
                                    {item.first_name} {item.first_name}
                                </li>
                                ))}
                            </ul>  
                        </div>
                        <Footer />
                    </div>    
                </div>              
            );
          }           
    }
}

export default User;