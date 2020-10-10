import React from 'react';
import {NavLink } from 'react-router-dom';
import '../../assets/styles/services/navbar.css';

const  Navbar = (props) =>{
    const {isPositionFixed} = props;
    return(
        <nav className = {`tab ${isPositionFixed ? ` fixe-navbar` : ` static`}`}>
            <ul  className = {`nav nav-tabs`}  id="nav-tab" role="tablist">
                <NavLink to = "#startup-accelerator"data-toggle="tab" role = "tab" aria-selected = "true" 
                aria-aria-controls = "startup-accelerator" id = "nav-startup-tab" className = "nav-item nav-link first active">
                     <div className="circle"></div>
                    <span 
                    >Startup Accelerator</span>
                </NavLink>
                <NavLink to = "#product-design"data-toggle="tab" role = "tab" aria-selected = "false" 
                aria-aria-controls = "product-design" id = "nav-product-tab" className = "nav-item nav-link">
                    <div className="circle"></div>
                    <span 
                    >Product Design</span>
                </NavLink>
                <NavLink to = "#mobile-app-development" data-toggle="tab" role = "tab" aria-selected = "false" 
                aria-aria-controls = "mobile-app-development" id = "nav-mobile-tab" className = "nav-item nav-link ">
                    <div className="circle"></div>
                    <span 
                    >Mobile App Development</span>
                </NavLink>
                <NavLink to = "#web-development" data-toggle="tab" role = "tab" aria-selected = "false" 
                aria-aria-controls = "web-development" id = "nav-web-tab" className = "nav-item nav-link">
                    <div className="circle"></div>
                    <span 
                    >Web Development</span>
                </NavLink>
                <NavLink to = "#iot" data-toggle="tab" role = "tab" aria-selected = "false" 
                aria-aria-controls = "iot" id = "nav-iot-tab" className = "nav-item nav-link">
                    <div className="circle"></div>
                    <span 
                    >IOT</span>
                </NavLink>
                <NavLink to = "#growth-and-digital" data-toggle="tab" role = "tab" aria-selected = "false" 
                aria-aria-controls = "growth-and-digital" id = "nav-growth-tab" className = "nav-item nav-link">
                    <div className="circle"></div>
                    <span 
                    >Growth and Digital Marketing</span>
                </NavLink>
                <NavLink to = "#software-maintenance"data-toggle="tab" role = "tab" aria-selected = "false" 
                aria-aria-controls = "software-maintenance" id = "nav-software-tab" className = "nav-item nav-link">
                    <div className="circle"></div>
                    <span 
                    >Software Maintenance</span>
                </NavLink>
            </ul>
        </nav>
    )
}
export default Navbar;