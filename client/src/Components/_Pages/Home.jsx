// * COMPS
import Nav from '../Home/Nav.jsx';
import Heading from '../Home/Heading.jsx';
import PortfolioCard from '../Library/PortfolioCard.jsx';
import ExperienceJump from '../Home/ExperienceJump.jsx';
import Footer from '../Footer.jsx';
import Branding from '../Home/Branding.jsx';

// * data 
import {pf} from '../../assets/portfolio.js'

// * css 
import '../../CSS/_Pages/Home.css'

const Home = () => {

    
    return(
        <div className="Home">
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
    )
};

export default Home;