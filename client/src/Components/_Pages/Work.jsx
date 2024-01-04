// * CSS
import "../../CSS/_Pages/Work.css";

// * comps
import WorkHistory from "../Experience/WorkHistory";

const Work = () => {

    return(
        <div className="Work">
            <div className="Work__intro">
                <h1 className="intro__title" id="title_work">Work History</h1>
                <p className="intro_copy">hello world copy</p>
            </div>
            <WorkHistory />
        </div>
    )
};

export default Work;