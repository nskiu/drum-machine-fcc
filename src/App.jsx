import Controls from "./components/Controls";
import DrumPad from "./components/DrumPad";
import sounds from "./assets/sounds.js";
import { useState } from "react";

const text = sounds;

const App = () => {
  const [beats, setBeats] = useState(text.set1);
  const [volume, setVolume] = useState(1);

  const handleClick = (event) => {
    const button = event.target.children[0];
    button.volume = volume;
    button.play();
  };

  const handleChange = (event) => {
    setVolume(event.target.value / 100);
  };

  return (
    <div id="drum-machine">
      <div id="logo">Logo</div>
      <DrumPad handleClick={handleClick} beats={beats} />
      <Controls volume={volume} handleChange={handleChange} />
    </div>
  );
};

export default App;
