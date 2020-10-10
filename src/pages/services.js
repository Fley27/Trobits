import React from 'react';
import HeaderServices from '../components/Services/header';
import Navbar from '../components/Services/navbar';
import ListItem from '../components/Services/list-item';
import Industry from '../components/Services/industry';
import Technology from '../components/Services/technology';
import Achievement from '../components/Services/achievement';
import Reason from '../components/Services/reason';
import DropMessage from '../components/Services/drop-message';
import Footer from '../components/Services/footer';
import TabSlider from '../components/Services/tabSlider';
import Sidebar from "../components/sidebar";
import '../assets/styles/services/index.css';

class Services extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isCarousel : false,
            windowWidth: 0,
            isPositionFixed: false,
            isSidebar: false
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }


    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
        this.handleResize();
    }
  
    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) =>{
        let scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);
    
        console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 585 )
            this.setState({isPositionFixed: true});
        else  
            this.setState({isPositionFixed: false});
    }

    handleResize = (e) => {
        let isCarousel = this.state.isCarousel;
        if(window.innerWidth < 1000)
            isCarousel = true;
        else
            isCarousel = false;

        this.setState({isCarousel});

        let isSidebar = null;
        if(window.innerWidth <= 880)
            isSidebar = true;
        else
            isSidebar = false;
  
        this.setState({isSidebar});
    };

    

    render(){   
        const {isCarousel, isPositionFixed, isSidebar} = this.state;
        return(
            <div className = "page-wrapper">
                {
                    isSidebar ? (
                        <Sidebar/>
                    ):
                    ""
                }
                <HeaderServices/>
                <div className = {`body ${isCarousel ? ` col` : ``}`}>
                    {isCarousel ? <TabSlider/> : <Navbar  isPositionFixed = {isPositionFixed}/>}
                    <ListItem isCarousel = {isCarousel} isPositionFixed = {isPositionFixed}/>
                </div>
                <div className = "industry">
                    <Industry/>
                </div>
                <div className = "technology">
                    <Technology isCarousel = {isCarousel}/>
                </div>
                <div className = "achievement">
                    <Achievement/>
                </div>
                <div className = "reason">
                    <Reason/>
                </div>
                <div className = "drop-message">
                    <DropMessage/>
                </div>
                <div className = "footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Services;