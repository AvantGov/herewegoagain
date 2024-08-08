// depends 
import { useEffect } from 'react';

// utils 
import { ShowVideo } from '../../utils/ShowVideo';

// comps 
import FooterNav from '../Library/FooterNav';
import Case from './Case';


// css 
import '../../CSS/Showcase/Showcase.css';

const Showcase = (props) => {
    const pf = props.props

    useEffect(() => {
        const case_hydra = window.document.querySelector("#bulletContainer__Dev003")
        const btn = window.document.createElement("button")
        btn.innerHTML = "Activate Visualizer"

        if(case_hydra.lastChild !== btn && case_hydra) {
            console.log(case_hydra.lastChild)
            case_hydra.appendChild(btn)
        }

    },[])

    return (
        <div className='Showcase' id='main_showcase'>
            <div className='Showcase__caseLable'>
                <h1 className='caseLable__title'>{pf.title}</h1>
                <p className='caseLable__desc'>{pf.desc}</p>
                {pf.title !== "Sound" ? <p className='caseLable__mobileWarn'>use desktop website to view samples</p> : null}
            </div>
            {pf.list.map((item) => {
                return(
                    <Case props={item} key={`showcase_${item.key}`}/>
                )
            })}
            <FooterNav props={{color: "#05C3DD" }}/>
        </div>
    )
};

export default Showcase;