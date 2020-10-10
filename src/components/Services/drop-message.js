import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../assets/styles/services/drop-message.css';

function DropMessage(){
    return(
        <div className = 'drop-message-component'>
             <div className="notice top-tri tri-part">
                <div className="label d-none">Our Services</div>
            </div>
            <div className = "drop-title text-center">
                <div className = "col"><h1><strong>Are You Impressed ?</strong></h1></div >
            </div>
            <div className = "box d-flex">
                <NavLink to = "#" className = "variant text-primary">Drop A Message</NavLink>
            </div>
        </div>
    )
}

export default DropMessage;