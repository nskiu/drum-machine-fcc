import Controls from "./components/Controls";
import DrumPad from "./components/DrumPad";
import sounds from "./assets/sounds.js";
import { useState } from "react";

const text = sounds;

const App = () => {
  const [power, setPower] = useState(true);
  const [beats, setBeats] = useState(text.set1);
  const [volume, setVolume] = useState(1);

  const togglePower = () => {
    setPower(!power);
  };

  const playBeat = (beat) => {
    if (power) {
      beat.volume = volume;
      beat.play();
    }
  };

  const handleClick = (event) => {
    playBeat(event.target.children[0]);
  };

  const handleChange = (event) => {
    setVolume(event.target.value / 100);
  };

  return (
    <div id="drum-machine">
      <div id="logo">Logo</div>
      <DrumPad handleClick={handleClick} beats={beats} />
      <Controls
        volume={volume}
        handleChange={handleChange}
        power={power}
        togglePower={togglePower}
      />
    </div>
  );
};

export default App;
