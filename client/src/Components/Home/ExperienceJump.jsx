// depends 
import { Link } from "react-router-dom";

// css 
import "../../CSS/Home/ExperienceJump.css";

const ExperienceJump = () => {

    return (
        <div className="ExperienceJump">
            <Link className="ExperienceJump__jumpLink" to="/work" id="workprofessional">
                <div className="ExperienceJump__jump">Work History &#8702;</div>
            </Link>
            <Link className="ExperienceJump__jumpLink" to="/personal" id="personal">
                <div className="ExperienceJump__jump">Personal Projects &#8702;</div>
            </Link>
        </div>
    )
};

export default ExperienceJump;

