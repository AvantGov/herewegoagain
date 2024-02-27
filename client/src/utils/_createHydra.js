//depends 
import Hydra from 'hydra-synth';

export const _createHydra = (context) => {
    var canvas = document.createElement("canvas")
    const hydra = new Hydra({
      detectAudio: false,
      canvas: canvas,
      makeGlobal: false
    }).synth
    hydra.setResolution(1920,1080)
    hydra.fps = 30
    console.log("hydra:",hydra)
    hydra.gradient(1).out()
    // hydra.osc(3, 0.1, 100)
    //   .color(0.9, 0.7, 0.8)
    //   .diff(hydra.osc(.45, 0.3, 100)
    //     .color(0.164, 0.9, 0.9)
    //     .rotate(0.18)
    //     .pixelate(12.369)
    //     .kaleid())
    //   .scrollX(10)
    //   .colorama()
    //   .luma()
    //   .repeatX(7.139)
    //   .repeatY(0.566)
    //   .modulate(hydra.osc(1, -.174, 1))
    //   .scale(2)
    //   .out();
    return canvas
}