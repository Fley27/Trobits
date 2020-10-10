import React from 'react';
import jQuery from 'jquery';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import Sidebar from './sidebar';
import  '../assets/styles/header.css';


class Header extends React.Component {
   constructor(props){
      super(props);
      this.state = {
          active : "home",
          isPositionFixed: false,
          isCarousel : false
      }
      this.addActiveClass = this.addActiveClass.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
      this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.addEventListener("resize", this.handleResize);
    }
    handleResize = (e) => {
      let isCarousel = null;
      if(window.innerWidth <= 880)
          isCarousel = true;
      else
          isCarousel = false;

      this.setState({isCarousel});
   };

  
  handleScroll(event) {
      let scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);

       if(event.srcElement.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
          this.setState({isPositionFixed: true});
       else  
          this.setState({isPositionFixed: false});
  }

    addActiveClass(e){
      const clicked = e.target.id;
      console.log(clicked);
      this.setState({active : clicked});
   }


   render(){  
      const {isCarousel} = this.state;
      if(!isCarousel)
         
         return (
            <div className= {`header-wrap${this.state.isPositionFixed ? ' fixed' : ""}`} onScroll = {this.handleScroll}>
               <div className="header">
                  <div className="left-logo">
                     <img className="logo-img" src={logoImg} />
                     <label className="logo-label">Troibits</label>
                  </div>
                  <div className="menu menuA">
                     <NavLink id = "home"className= {`menuA-item ${this.state.active === "home" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/">
                           Home
                           <div id = "home" className={`circle ${this.state.active === "home" ? "" : " d-none"}`}></div>
                     </NavLink>
                     <NavLink id = "services" className= {`menuA-item ${this.state.active === "services" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/services">
                           Services
                           <div id = "services" className={`circle ${this.state.active === "services" ? "" : " d-none"}`}></div>
                     </NavLink>
                     <NavLink id = "about" className= {`menuA-item ${this.state.active === "about" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/about">
                           About
                           <div id = "about" className={`circle ${this.state.active === "about" ? "" : " d-none"}`}></div>
                     </NavLink>
                     <NavLink id = "portfolio" className= {`menuA-item ${this.state.active === "portfolio" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/portfolio">
                           Portfolio
                           <div id = "portfolio" className={`circle ${this.state.active === "portfolio" ? "" : " d-none"}`}></div>
                     </NavLink>
                     <NavLink id = "blog" className= {`menuA-item ${this.state.active === "blog" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/blog">
                           Blog
                           <div id = "blog" className={`circle ${this.state.active === "blog" ? "" : " d-none"}`}></div>
                     </NavLink>
                     <NavLink id = "contact" className= {`menuA-item ${this.state.active === "contact" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/contact">
                           Contact
                           <div id = "contact" className={`circle ${this.state.active === "contact" ? "" : " d-none"}`}></div>
                     </NavLink> 
                  </div>
               </div>
            </div>
        );
      else
         return(<div className = 'd-none'></div>)
   }
}
 
export default Header;


/*
   <div className="menu menuB">
               <div className="menu-icon" onClick={menuBOpenClick}><img src={menuIcon} /></div>
               <div className="menuB-content">
                  <div className="menuB-topbar">
                     <img className="menuB-logo" src={logoImg}></img>
                     <img className="menuB-close" src={menuIcon} onClick={menuBCloseClick}></img>
                  </div>
                  <div className="menuB-item" id="menuBHome" onClick={menuClick}>
                     Home<img src={menuHomeActiveImg}></img>
                  </div>
                  <div className="menuB-item" id="menuBServices" onClick={menuClick}>
                     Services<img src={menuServiceImg}></img>
                  </div>
                  <div className="menuB-item" id="menuBAbout" onClick={menuClick}>
                     About<img src={menuAboutImg}></img>
                  </div>
                  <div className="menuB-item" id="menuBPortfolio" onClick={menuClick}>
                     Portfolio<img src={menuPortfolioImg}></img>
                  </div>
                  <div className="menuB-item" id="menuBPortfolio" onClick={menuClick}>
                     Blog<img src={menuPortfolioImg}></img>
                  </div>
                  <div className="menuB-item" id="menuBContact" onClick={menuClick}>
                     Contact<img src={menuContactImg}></img>
                  </div>

               </div>
            </div>
*/