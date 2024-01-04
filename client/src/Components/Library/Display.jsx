// * depends
import { createBrowserRouter as CBR, RouterProvider as RP } from 'react-router-dom'

// * comps 
import Home from '../_Pages/Home.jsx';
import Work from '../_Pages/Work.jsx';

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
        }
      ])

    return(
        <div className='Display'>
            <RP router={router} />
        </div>
    );
};

export default Display;