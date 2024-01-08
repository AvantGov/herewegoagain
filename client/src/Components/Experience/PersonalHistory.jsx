// * CSS 
import "../../CSS/Experience/PersonalHistory.css";

// * data 
import { personalhistory } from "../../assets/experience";


const PersonalHistory = () => {
    console.log(personalhistory)
    return( 
        <div className="PersonalHistory">
            {personalhistory.map((item) => {
                return(
                    <div className="PersonalHistory__histContainer" key={item.id}>
                        <h2 className="histContainer__title">{item.company}</h2>
                        <p className="histContainer__date">{item.dates}</p>
                        <p className="histContainer__desc">{item.desc}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default PersonalHistory;
