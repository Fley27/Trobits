import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../assets/styles/services/footer.css';

function Footer (){
    return (
        <div className = "footer-component">
            <div className = "menu-footer">
                <h3 className = "footer-menu-title">Company</h3>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum Dolor Sil</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
            </div>
            <div className = "menu-footer">
                <h3 className = "footer-menu-title">Services</h3>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum Dolor Sil</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
            </div>
            <div className = "menu-footer">
                <h3 className = "footer-menu-title">Porfolio</h3>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum Dolor Sil</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
            </div>
            <div className = "menu-footer">
                <h3 className = "footer-menu-title">Industries</h3>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum Dolor Sil</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
            </div>
            <div className = "menu-footer">
                <h3 className = "footer-menu-title">QuickLinks</h3>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum Dolor Sil</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
            </div>
            <div className="notice bottom-tri tri-part">
                <div className="label d-none">Our Services</div>
            </div>
        </div>
    )
}

export default Footer;
