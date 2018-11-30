import React, { Component } from 'react';

class SideBar extends Component{
    render(){
        return (
            <div className="sidebar">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="http://www.creative-tim.com" className="simple-text">
                            Creative Tim
                        </a>
                    </div>

                    <ul className="nav">
                        <li className="active">
                            <a href="dashboard.html">
                                <i className="pe-7s-graph"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li>
                            <a href="user.html">
                                <i className="pe-7s-user"></i>
                                <p>User Profile</p>
                            </a>
                        </li>
                        <li>
                            <a href="table.html">
                                <i className="pe-7s-note2"></i>
                                <p>Table List</p>
                            </a>
                        </li>
                        <li>
                            <a href="typography.html">
                                <i className="pe-7s-news-paper"></i>
                                <p>Typography</p>
                            </a>
                        </li>
                        <li>
                            <a href="icons.html">
                                <i className="pe-7s-science"></i>
                                <p>Icons</p>
                            </a>
                        </li>
                        <li>
                            <a href="maps.html">
                                <i className="pe-7s-map-marker"></i>
                                <p>Maps</p>
                            </a>
                        </li>
                        <li>
                            <a href="notifications.html">
                                <i className="pe-7s-bell"></i>
                                <p>Notifications</p>
                            </a>
                        </li>
                        <li className="active-pro">
                            <a href="upgrade.html">
                                <i className="pe-7s-rocket"></i>
                                <p>Upgrade to PRO</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;