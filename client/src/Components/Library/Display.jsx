// * COMPS
import Nav from "../Nav";
import Heading from "../Heading";
import PortfolioCard from "./PortfolioCard";

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
        </div>
    );
};

export default Display;