import Meyda from 'meyda';

export const _renderAudio = () => {
    const audioCtx = new window.AudioContext();
    const audioElem = window.document.getElementById("mda_audio_th")
    const source = audioCtx.createMediaElementSource(audioElem);
    source.connect(audioCtx.destination)
    console.log("render audio ran")
    return source
}

export const _renderAnalysis = (source) => {
    if (typeof Meyda === "undefined") {
        console.log("Meyda could not be found! Have you included it?");
      } else {
        const analyzer = Meyda.createMeydaAnalyzer({
          audioContext: source,
          source: source,
          bufferSize: 512,
          featureExtractors: ["rms"],
          callback: (features) => {
            console.log(features);
          },
        });
        analyzer.start();
      }
      
}