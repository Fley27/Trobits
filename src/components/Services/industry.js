import React from 'react';
import logoImg from '../../assets/images/Icon.svg';
import '../../assets/styles/services/industry.css';


function Industry(){
    return(
        <div className = "col indu ">
            <div className="notice top-tri tri-part">
                <div className="label d-none">Our Services</div>
            </div>
            <div className = "title-industry text-center">
                <div className = "col  "><h1><strong>Industries We Serve</strong></h1></div >
                <div className = "col" ><h3>Our design is a key factor why we are able to create better products as we a propper ideation, research,<br/> 
                    planning then create something on a blank piece of paper which stands out and is minimal.</h3></div >
            </div>
            <div className ="d-flex list-items">
                    <div className = "item" >
                        <img src = {logoImg}/>
                        <span>HealthCare</span>
                    </div>
                    <div className = "item" >
                        <img src = {logoImg}/>
                        <span>Fitness and Wellness</span>
                    </div>
                    <div className = "item" >
                        <img src = {logoImg}/>
                        <span>Pharma</span>
                    </div>
                    <div className = "item" >
                        <img src = {logoImg}/>
                        <span>Retail And <br/>E-Commerce</span>
                    </div>
                    <div className = "item" >
                        <img src = {logoImg}/>
                        <span>Education And <br/> Training</span>
                    </div>
                    <div className = "item" >
                        <img src = {logoImg}/>
                        <span>Enterprise App <br/> Development</span>
                    </div>
                    <div className = "item" >
                        <img src = {logoImg}/>
                        <span>Logistics</span>
                    </div>
                    <div className = "item" >
                        <img src = {logoImg}/>
                        <span>Social Networking</span>
                    </div>
                    <div className = "item" >
                        <img src = {logoImg}/>
                        <span>Automative And <br/> Transportation</span>
                    </div>
                    <div className = "item" >
                        <img src = {logoImg}/>
                        <span>Energy And <br/>Utilities</span>
                    </div>
                </div>
        </div>
    )
}


export default Industry;