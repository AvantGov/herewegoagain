// depends.
import { useEffect } from 'react';
import Hydra from 'hydra-synth';
import Meyda from 'meyda';

//comps
import Display from './Library/Display';
import AudioController from './Library/AudioController';

// utils 
import {_createHydra} from '../utils/_createHydra.js';

// CSS 
import '../CSS/App.css';

function App() {
  // create canvas + apply styles 
  


  useEffect(() => {
    // _createHydra()
    const App = document.getElementById("App")
    App.insertBefore(_createHydra(), App.childNodes[0]);

    // hides the audiocontroller on inital render 
    const AudCont = window.document.getElementById("Comp_AudCont")
    AudCont.style.display = "none"
  }, [])


  return (
    <div id='App' className='App'>
      <Display />
      <AudioController />
    </div>
  )
}

export default App
