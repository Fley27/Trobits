import React from 'react';
import yolo    from '../../assets/images/illustration.svg';
import '../../assets/styles/services/reason.css';

function Reason(){
    return(
        <div className = "reason-component">
            <div className = "achievement-titl text-center">
                <div className = "col"><h1><strong>What Make Us Different</strong></h1></div >
            </div>
            <div className = "reason-item d-flex">
                <img className="d-block w-40" src={yolo} alt="First slide"/>
                <div className = "reason-description d-flex">
                    <div className = "header-reason d-flex">
                        <div className = "bar"></div>
                        <div className = "title-reason"><h2>Smart Thinking And Strategy</h2></div>
                    </div>
                    <div className = "reason-text">
                            <p className = "text-secondary">
                                    acceder a varias de las.
                                    presentaron fallas. Usuarios de diversos países, entre ellos México, Australia, Brasil
                                    Estados Unidos y Reino Unido señalaron a través de diversos medios que no podían 
                                    acceder a varias de las.
                            </p>
                    </div>
                </div>      
            </div>
            <div className = "reason-item2  d-flex">
                <div className = "reason-description2  d-flex ">
                    <div className = "header-reason2 d-flex ">
                        <div className = "bar"></div>
                        <div className = "title-reason"><h2>Architecture And Design</h2></div>
                    </div>
                    <div className = "reason-text2">
                            <p className = "text-secondary">
                                    acceder a varias de las.
                                    presentaron fallas. Usuarios de diversos países, entre ellos México, Australia, Brasil
                                    Estados Unidos y Reino Unido señalaron a través de diversos medios que no podían 
                                    acceder a varias de las.
                            </p>
                    </div>
                </div>  
                <img className="d-block w-40" src={yolo} alt="First slide"/>    
            </div>
            <div className = "reason-item d-flex">
                <img className="d-block w-40" src={yolo} alt="First slide"/>
                <div className = "reason-description d-flex">
                    <div className = "header-reason d-flex">
                        <div className = "bar"></div>
                        <div className = "title-reason"><h2>Still Thinking</h2></div>
                    </div>
                    <div className = "reason-text">
                            <p className = "text-secondary">
                                    acceder a varias de las.
                                    presentaron fallas. Usuarios de diversos países, entre ellos México, Australia, Brasil
                                    Estados Unidos y Reino Unido señalaron a través de diversos medios que no podían 
                                    acceder a varias de las.
                            </p>
                    </div>
                </div>      
            </div>
        </div>
    )
}

export default Reason;