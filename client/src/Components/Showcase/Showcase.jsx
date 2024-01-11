// comps 
import Nav from '../Home/Nav';

// css 
import '../../CSS/Showcase/Showcase.css';

const Showcase = (props) => {
    
    console.log("showcase props:", props)

    return (
        <div className='Showcase'>
            <Nav />
            check the console 
        </div>
    )
};

export default Showcase;