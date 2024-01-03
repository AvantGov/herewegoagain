// depends.
import { useEffect } from 'react';
import Hydra from 'hydra-synth';

//comps
import Display from './Library/Display';

// CSS 
import '../CSS/App.css';

function App() {
  // create canvas + apply styles 
  var canvas = document.createElement("canvas")

  const createHydra = (context) => {
    const hydra = new Hydra({
      detectAudio: false,
      canvas: canvas,
      makeGlobal: false
    }).synth
    hydra.setResolution(1920,1080)
    hydra.gradient(1).out()
  //   hydra.osc(1, 0.1, 100)
	// .color(0.9, 0.7, 0.8)
	// .diff(hydra.osc(.45, 0.3, 100)
	// 	.color(0.164, 0.9, 0.9)
	// 	.rotate(0.18)
	// 	.pixelate(12.369)
	// 	.kaleid())
	// .scrollX(10)
	// .colorama()
	// .luma()
	// .repeatX(7.139)
	// .repeatY(0.566)
	// .modulate(hydra.osc(1, -.174, 1))
	// .scale(2)
	// .out();
  }

  useEffect(() => {
    createHydra()
    const App = document.getElementById("App")
    App.insertBefore(canvas, App.childNodes[0]);
  }, [])


  return (
    <div id='App' className='App'>
      <Display />
    </div>
  )
}

export default App
