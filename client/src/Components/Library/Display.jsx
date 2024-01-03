// * depends
import { createBrowserRouter as CBR, RouterProvider as RP } from 'react-router-dom'

// * comps 
import Home from '../_Pages/Home.jsx';

// * CSS 
import "../../CSS/Library/Display.css"


const Display = () => {

    const router = CBR([
        {
          path: "/",
          element: <Home />
        }
      ])

    return(
        <div className='Display'>
            <RP router={router} />
        </div>
    );
};

export default Display;