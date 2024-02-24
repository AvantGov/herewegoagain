// depends
import { Link } from "react-router-dom";

// css 
import "../../CSS/Library/FooterNav.css";

const FooterNav = (props) => {
    const pr = props.props

    return(
        <div id='FooterNav' className='FooterNav' style={{
                backgroundColor: pr.color, 
            }}>
            <Link className='FooterNav__link' id='footer_navlink_1' to='/'>Home</Link>
            <Link className='FooterNav__link' id='footer_navlink_1' to='/Development'>Development</Link>
            <Link className='FooterNav__link' id='footer_navlink_2' to='/Design'>Design</Link>
            <Link className='FooterNav__link' id='footer_navlink_3' to='/Sound'>Sound</Link>
            <Link className='FooterNav__link' id='footer_navlink_4' to='/Photography'>Photography</Link>
            <Link className='FooterNav__link' id='footer_navlink_4' to='/work'>Work History</Link>
            <Link className='FooterNav__link' id='footer_navlink_4' to='/personal'>Personal PRJs</Link>
        </div>
    )
}

export default FooterNav;

