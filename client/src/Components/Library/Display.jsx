// * depends
import { createBrowserRouter as CBR, RouterProvider as RP } from 'react-router-dom'

// * comps 
import Home from '../_Pages/Home.jsx';
import Work from '../_Pages/Work.jsx';
import Personal from '../_Pages/Personal.jsx';


// * CSS 
import "../../CSS/Library/Display.css"


const Display = () => {

    const router = CBR([
        {
          path: "/",
          element: <Home />
        },
        {
            path: "/work",
            element: <Work />
        },
        {
            path: "/personal",
            element: <Personal />
        }
      ])

    return(
        <div className='Display'>
            <RP router={router} />
        </div>
    );
};

export default Display;