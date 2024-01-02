// css 
import '../CSS/Nav.css';

const Nav = () => {

    return(
        <div id='Nav' className='Nav'>
            <a className='Nav__link' id='navlink_1' href='/' target="_blank">Home</a>
            <a className='Nav__link' id='navlink_1' href='/' target="_blank">Development</a>
            <a className='Nav__link' id='navlink_2' href='/' target="_blank">Design</a>
            <a className='Nav__link' id='navlink_3' href='/' target="_blank">Sound</a>
            <a className='Nav__link' id='navlink_4' href='/' target="_blank">Photography</a>
        </div>
    )
}

export default Nav;