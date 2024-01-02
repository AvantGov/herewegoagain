// depends
import {Link} from 'react-router-dom';

// media


// CSS 
import "../CSS/Footer.css"

const Footer = () => {

    return(
        <div className="Footer">
            <div className="Footer__sitemapContainer">
                <Link to="/" className='sitemapContainer__link'>Development</Link>
                <Link to="/" className='sitemapContainer__link'>Design</Link>
                <Link to="/" className='sitemapContainer__link'>Sound</Link>
                <Link to="/" className='sitemapContainer__link'>Photography</Link>
                <Link to="/" className='sitemapContainer__link'>Activate <br />Video Synth Mode</Link>

            </div>
            <div className="Footer__socialContainer">
                <Link to="/" className="socialContainer__svgLink">
                    <img className="svglink__img" src='github-mark.svg' />
                </Link>
                <Link to="/" className="socialContainer__svgLink" id='behance'>
                    <img className="svglink__img" id='behance_svg' src='Behance_logo.svg' />
                </Link>
                <Link to="/" className="socialContainer__svgLink">
                    <img className="svglink__img" src='spotify-svgrepo-com.svg' />
                </Link>
                <Link to="/" className="socialContainer__svgLink">
                    <img className="svglink__img" src='spotify-svgrepo-com.svg' />
                </Link>
            </div>
        </div>
    )
};

export default Footer;