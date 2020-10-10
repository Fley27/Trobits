import React from 'react';
import {NavLink} from "react-router-dom";
import yolo    from '../../assets/images/yolo-phone-color.png';
import partnerSkypeImg    from '../../assets/images/partner-skype.png';
import partnerHpImg       from '../../assets/images/partner-hp.png';
import partnerIntelImg    from '../../assets/images/partner-intel.png';
import partnerNikeImg     from '../../assets/images/partner-nike.png';
import Leo   from '../../assets/images/lio.jpg';
import '../../assets/styles/services/achievement.css';

function Achievement(){
    return(
        <div className = "achievement-challenges">
            <div className="notice top-tri tri-part">
                <div className="label d-none">Our Services</div>
            </div>
            <div className = "achievement-titl text-center">
                <div className = ""><h1><strong>Achievements and Challenges</strong></h1></div >
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="d-flex carousel-item puppy active">
                         <img className="d-block w-40" src={yolo} alt="First slide"/>
                         <div className = "description d-flex">
                            <div className = "header-desc ">
                                <h3 className = "title-desc">Bit7pay</h3>
                                <h5 className = "sub-title text-primary">Cryptocurrency Wallet</h5>
                            </div>
                            <div className = "body-desc" >
                                <p className = "text-secondary w-80">
                                    El día de ayer, 28 de septiembre, por la tarde, los servicios de Microsoft, incluidos Teams, 
                                    y Office 365, 
                                    presentaron fallas. Usuarios de diversos países, entre ellos México, Australia, Brasil
                                    Estados Unidos y Reino Unido señalaron a través de diversos medios que no podían 
                                    acceder a varias de las.
                                    presentaron fallas. Usuarios de diversos países, entre ellos México, Australia, Brasil
                                    Estados Unidos y Reino Unido señalaron a través de diversos medios que no podían 
                                    acceder a varias de las.
                                </p>
                            </div>
                            <div className = "footer-desc">
                                <div className = "know">
                                    <NavLink to={"#"}>View Case Study<i className="material-icons">keyboard_arrow_right</i></NavLink>
                                </div>
                            </div>
                         </div>
                   </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className = "project">
                <div className = "row d-flex text-center">
                <div className = "col"><h2>Lorem Ipsum Lorem Ipsum Lorem</h2></div >
                <div className = "col" ><h4 className = "text-secondary">Our design is a key factor why we are able to create better products as we a propper ideation, research,<br/> 
                    planning then create something on a blank piece of paper which stands out and is minimal.</h4></div >
                </div>
                <div className = "box d-flex">
                    <NavLink to = "#" className = "variant text-primary">Explore More Project</NavLink>
                </div>
            </div>
            <div className = "client">
                <div className = "client-title text-center">
                    <div className = "col"><strong><h1>Our Clients Love Us</h1></strong></div >
                </div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner inner-client">
                    <div className="d-flex carousel-item client-item-box active">
                        <div className = "header-client-box d-flex">
                            <div className = "profile-client d-flex">
                                <img src = {Leo}/>
                                <div className = "profile-info">
                                    <h5>Daniel Fisher</h5>
                                    <h6 className = "text-primary">Art Director At intel</h6>
                                </div>
                            </div>
                            <div className = "company-logo">
                                <img src = {partnerIntelImg}/>
                            </div>
                        </div>
                        <div className = "body-client-box d-flex" >
                            <div className = "icon-utf"><h4>&#10077;</h4></div>
                            <div className = "client-word">
                                <p>
                                    El día de ayer, 28 de septiembre, por la tarde, los servicios de Microsoft, incluidos Teams, 
                                    y Office 365, 
                                    presentaron fallas..
                                </p>
                            </div>
                        </div>
                   </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </div>
            <div className = "footer-logo">
            <div className = "image">
                    <img src = {partnerIntelImg}/>
                </div>
                <div className = "image">
                    <img src = {partnerHpImg}/>
                </div>
                <div className = "image">
                    <img src = {partnerNikeImg}/>
                </div>
                <div className = "image">
                    <img src = {partnerHpImg}/>
                </div>
                <div className = "image">
                    <img src = {partnerSkypeImg}/>
                </div>
                <div className = "image">
                    <img src = {partnerHpImg}/>
                </div>
                <div className = "image">
                    <img src = {partnerIntelImg}/>
                </div>
                <div className = "image">
                    <img src = {partnerNikeImg}/>
                </div>
                <div className = "image">
                    <img src = {partnerSkypeImg}/>
                </div>
                <div className = "image">
                    <img src = {partnerHpImg}/>
                </div>
            </div>
        </div>
    )
}

export default Achievement;