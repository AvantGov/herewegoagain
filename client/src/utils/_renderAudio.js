import Meyda from 'meyda';

export const _renderAudio = () => {
    const audCtx = new window.AudioContext();
    audCtx.createMediaElementSource(            
        <audio className="AudioController__audio" controls>
            <source src="thighhighs_instru.mp3" type="audio/mpeg" />
            Your browser does not support the audio tag.
        </audio>
    )

}