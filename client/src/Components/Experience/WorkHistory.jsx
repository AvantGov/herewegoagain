// css 
import "../../CSS/Experience/WorkHistory.css";

// data 
import {workhistory} from '../../assets/experience.js';


const WorkHistory = () => {
    return(
        <div className="WorkHistory">
            {workhistory.map((item) => {
                return (
                    <div className="WorkHistory__posContainer">
                        <h2 className="posContainer__title">{item.title}</h2>
                        <p className="posContainer__company">{item.company}</p>
                        <p className="posContainer__dates">{item.dates} | {item.location}</p>
                        {item.bullets.map((item) => {
                            return(
                                <p className="posContainer__bullet">{item}</p>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default WorkHistory;