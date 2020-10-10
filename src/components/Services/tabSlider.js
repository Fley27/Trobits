import React from 'react';
import '../../assets/styles/services/tabSlider.css';


class TabSlider extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            active: "item-0-1",
            count: 0,
            isPositionFixed: false
        }
        this.setIncrementCount = this.setIncrementCount.bind(this);
        this.setDecrementCount = this.setDecrementCount.bind(this);
        this.addActiveClass = this.addActiveClass.bind(this);
        this.addActiveClass = this.addActiveClass.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);
    
        console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 1000)
            this.setState({isPositionFixed: true});
        else  
            this.setState({isPositionFixed: false});
    }
    
    setIncrementCount(){
        let count = this.state.count + 1;
        if(count > 2)
            count = 0;
        this.setState({count});
    }
    
    setDecrementCount(){
        let count = this.state.count - 1;
        if(count < 0)
            count = 2;
        this.setState({count});
    }

    addActiveClass(e){
        const clicked = e.target.id;
        console.log(clicked);
        this.setState({active : clicked});
    }

    render(){
        return(
    <div className = {`tab-slider ${this.state.isPositionFixed ? ` tab-list-fixed` : ` static`}`}>
        <div  className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div id = "item-0" className={`carousel-item tab-slider-item ${this.state.count === 0 ? ` active` : ``}`}>
                        <span onClick = {this.addActiveClass}  id = "item-0-1" className = {`d-block ${this.state.active === `item-0-1` ? ` active` : `` }`}>Startup Accelerator</span>
                        <span onClick = {this.addActiveClass} id = "item-0-2" className = {`d-block ${this.state.active === `item-0-2` ? ` active` : `` }`}>Product Design</span>
                        <span onClick = {this.addActiveClass} id = "item-0-3" className = {`d-block ${this.state.active === `item-0-3` ? ` active` : `` }`}>Mobile App Development</span>
                   </div>
                   <div id = "item-1" className={`carousel-item tab-slider-item ${this.state.count === 1 ? ` active` : ``}`}>
                        <span onClick = {this.addActiveClass} id = "item-1-1" className = {`d-block ${this.state.active === `item-1-1` ? ` active` : `` }`}>Web Development</span>
                        <span onClick = {this.addActiveClass} id = "item-1-2" className = {`d-block ${this.state.active === `item-1-2` ? ` active` : `` }`}>IOT</span>
                        <span onClick = {this.addActiveClass} id = "item-1-3" className = {`d-block ${this.state.active === `item-1-3` ? ` active` : `` }`}>Growth and Digital Marketing</span>
                   </div>
                   <div id = "item-2" className={`carousel-item tab-slider-item ${this.state.count === 2 ? ` active` : ``}`}>
                        <span onClick = {this.addActiveClass} id = "item-2-1" className = {`d-block ${this.state.active === `item-2-1` ? ` active` : `` }`}>Software Maintenance</span>
                        <span onClick = {this.addActiveClass} id = "item-2-2" className = {`d-block ${this.state.active === `item-2-2` ? ` active` : `` }`}>Lorem Ipsum Ip</span>
                        <span onClick = {this.addActiveClass} id = "item-2-3" className = {`d-block ${this.state.active === `item-2-3` ? ` active` : `` }`}>Lorem Ipsum Ip</span>
                   </div>
                </div>
                <div onClick = {this.setDecrementCount} className="carousel-control-prev"  role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </div>
                <div onClick = {this.setIncrementCount} className="carousel-control-next"  role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </div>
            </div>
        </div>
    )
}}
export default TabSlider;