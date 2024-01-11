// * depends
import { createBrowserRouter as CBR, RouterProvider as RP } from 'react-router-dom'

// * comps 
import Home from '../_Pages/Home.jsx';
import Work from '../_Pages/Work.jsx';
import Personal from '../_Pages/Personal.jsx';
import Showcase from '../Showcase/Showcase.jsx';

// * CSS 
import "../../CSS/Library/Display.css"


const Display = () => {

    const obj = {
        development: "development",
        design: "design",
        sound: "sound",
        photo: "photography"

    }

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
        },
        {
            path: "/Development",
            element: <Showcase props={obj.development} />
        },
        {
            path: "/Design",
            element: <Showcase props={obj.design} />
        },        
        {
            path: "/Sound",
            element: <Showcase props={obj.sound} />
        },
        {
            path: "/Photography",
            element: <Showcase props={obj.photo} />
        }


        
      ])

    return(
        <div className='Display'>
            <RP router={router} />
        </div>
    );
};

export default Display;