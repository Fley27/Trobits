import React from 'react';
import jQuery from 'jquery';
import logoImg from '../assets/images/logo.png';
import menuIcon from '../assets/images/menu-icon.png';
import menuHomeImg from '../assets/images/menu-home.png';
import menuHomeActiveImg from '../assets/images/menu-home-active.png';
import menuServiceImg from '../assets/images/menu-service.png';
import menuPortfolioImg from '../assets/images/menu-portfolio.png';
import menuAboutImg from '../assets/images/menu-about.png';
import menuContactImg from '../assets/images/menu-contact.png';
import '../assets/styles/services/sidebar.css';

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active : false,
            windowWidth: 0,
            isPositionFixed: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
    }

    
    handleClick = (e) => {
        let active = !this.state.active;
        this.setState({active});
    };

    render(){
        const {active } = this.state;
        return(
                <div className="wrapper" style = {{height: window.innerHeight}}>
                    <nav id="sidebar" className = {`${active ? `active` : ``}`}>                    
                        <ul className="list-unstyled components">
                            <li className = " first">
                                <img src = {logoImg}/>
                                <span>Troibits</span>
                            </li>
                            <li className = "second">
                                <img src = {menuHomeImg}/>
                                <a href="/services">Home</a>
                            </li>
                            <li className = "">
                                <img src = {menuServiceImg}/>
                                <a href="/services">Services</a>
                            </li>
                            <li className = "">
                                <img src = {menuAboutImg}/>
                                <a href="/services">About</a>
                            </li>
                            <li className = "">
                                <img src = {menuPortfolioImg}/>
                                <a href="/services">Portfolio</a>
                            </li>
                            <li className = "">
                                <img src = {menuServiceImg}/>
                                <a href="/services">Blog</a>
                            </li>
                            <li className = "">
                                <img src = {menuContactImg}/>
                                <a href="/services">Contact</a>
                            </li>
                        </ul>
                </nav>
                <div id="content">
                    <button onClick = {this.handleClick} type="button" id="sidebarCollapse" className= {` navbar-btn ${active ? ` active`: ``}`} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Sidebar;