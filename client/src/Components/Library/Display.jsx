// * COMPS
import Nav from "../Home/Nav";
import Heading from "../Home/Heading";
import PortfolioCard from "./PortfolioCard";
import Footer from '../Footer.jsx'
import Branding from '../Home/Branding.jsx'
import ExperienceJump from "../Home/ExperienceJump.jsx";

// * data 
import {pf} from '../../assets/portfolio.js'


// * CSS 
import "../../CSS/Library/Display.css"


const Display = () => {

    return(
        <div className='Display'>
            <Nav />
            <Heading />
            <PortfolioCard props={pf.Development} />
            <PortfolioCard props={pf.Design} />
            <PortfolioCard props={pf.Sound} />
            <PortfolioCard props={pf.Photography} />
            <ExperienceJump />
            <Footer />
            <Branding />
        </div>
    );
};

export default Display;