// depends 
import { Link } from "react-router-dom";

// css 
import "../../CSS/Home/ExperienceJump.css";

const ExperienceJump = () => {

    return (
        <div className="ExperienceJump">
            <Link className="ExperienceJump__jumpLink" to="/display/work" id="workprofessional">
                <div className="ExperienceJump__jump">Work History</div>
            </Link>
            <Link className="ExperienceJump__jumpLink" to="display/personal" id="personal">
                <div className="ExperienceJump__jump">Personal Projects</div>
            </Link>
        </div>
    )
};

export default ExperienceJump;

