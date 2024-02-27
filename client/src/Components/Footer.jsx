//depends
import { Link } from "react-router-dom";

// CSS 
import "../CSS/Footer.css"

const Footer = () => {

    const ShowVideo = () => {
        var display = window.document.getElementById("main_display")
        var AudCont = window.document.getElementById("Comp_AudCont")
        display.style.display = "none"
        AudCont.style.display = "flex"
    }

    return(
        <div className="Footer">
            <div className="Footer__sitemapContainer">
                <Link to="/development" className='sitemapContainer__link'>Development</Link>
                <Link to="/design" className='sitemapContainer__link'>Design</Link>
                <Link to="/sound" className='sitemapContainer__link'>Sound</Link>
                <Link to="/photography" className='sitemapContainer__link'>Photography</Link>
                <Link to="/personal" className='sitemapContainer__link'>Work History</Link>
                <Link to="/work" className='sitemapContainer__link'>Personal Work</Link>
                <div className='sitemapContainer__link' id="SMC_link_video" onClick={() => {ShowVideo()}}>Activate Video Synth Mode</div>
            </div>
            <div className="Footer__socialContainer">
                <a href="https://github.com/AvantGov" target="_blank" rel="noopener noreferer" className="socialContainer__svgLink">
                    <img className="svglink__img" src='github-mark.svg' />
                </a>
                <a href="https://www.behance.net/AlexCouts" target="_blank" rel="noopener noreferer" className="socialContainer__svgLink" id='behance'>
                    <img className="svglink__img" id='behance_svg' src='Behance_logo.svg' />
                </a>
                <a href="https://open.spotify.com/artist/11HMbZOFDN6Qd6pjZTtrzY?si=n4QAF5rsRpm8pp5vjswF-w" target="_blank" rel="noopener noreferer" className="socialContainer__svgLink">
                    <img className="svglink__img" src='spotify-svgrepo-com.svg' />
                </a>
                <a href="https://www.linkedin.com/in/alex-c-329721109/" target="_blank" rel="noopener noreferer" className="socialContainer__svgLink">
                    <img className="svglink__img" id="linkedin_svg" src='linkedin-svgrepo-com.svg' />
                </a>
            </div>
        </div>
    )
};

export default Footer;