// depends
import React, {useState, useEffect} from "react";
import { _createVis } from "../../utils/_createVis";

// css 
import "../../CSS/Library/AudioController.css"

const AudioController = (props) => {
    const pr = props.props
    console.log(pr)

    const handlePlay = () => {
        console.log("did it run? ")
        const App = document.getElementById("App")
        const Can1 = document.getElementById("canvas1")
        App.replaceChild(_createVis(), Can1)
    }

    return (
        <div className="AudioController" id="Comp_AudCont">
            <audio className="AudioController__audio" id="mda_audio_th" controls onPlay={handlePlay}>
                <source src="thighhighs_instru.mp3" type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
        </div>
    )
};

export default AudioController;