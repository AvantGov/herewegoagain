//depends 
import Hydra from 'hydra-synth';
// import { _renderAudio } from './_renderAudio';
// import { _renderAnalysis } from './_renderAudio';

export const _createVis = (context) => {

    var controller = {
      connected: false,
    }

    // // TODO: figure out how to tell if it's actually connected, just assuming here to prevent error
    // const audioElem = window.document.getElementById("mda_audio_th")
    
    // audioElem.onplay = () => {console.log("audio playing")}
    // audioElem.onpause = () => {console.log("changing back now")}

    var canvas = document.createElement("canvas")
    canvas.id = "canvas2"
    const hydra = new Hydra({
      detectAudio: false,
      canvas: canvas,
      makeGlobal: false
    }).synth
    hydra.setResolution(1920,1080)
    hydra.fps = 30
    hydra.bpm = 96
    console.log("hydra:",hydra)
    hydra.osc(3, 0.1, 100)
    .color(0.9, (Math.random() * 10), 0.8)
    .diff(hydra.osc(.35, 0.01, 200)
      .color((Math.random() * 10), (Math.random() * 10), (Math.random() * 10))
      .rotate((hydra.bpm/10000))
      .pixelate([1.543,4.6234,8.1234,12.369])
      .kaleid())
    .scrollX(1)
    .colorama()
    .luma()
    .repeatX(7.139)
    .repeatY(0.566)
    .modulate(hydra.osc(1, -.174, 1))
    .scale(2)
    .out();

    return canvas
}