// css 
import "../../CSS/Library/AudioController.css"

const AudioController = (props) => {
    const pr = props.props
    console.log(pr)

    return (
        <div className="AudioController" id="Comp_AudCont">
            <audio className="AudioController__audio" controls>
                <source src="thighhighs_instru.mp3" type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
        </div>
    )
};

export default AudioController;