import Controls from "./components/Controls";
import DrumPad from "./components/DrumPad";
import sounds from "./assets/sounds.js";
import { useState } from "react";

const text = sounds;

const App = () => {
  const [power, setPower] = useState(true);
  const [beats, setBeats] = useState(text.set1);
  const [volume, setVolume] = useState(1);
  const [display, setDisplay] = useState("");

  const togglePower = () => {
    setPower(!power);
    setDisplay("");
  };

  const playBeat = (beat) => {
    if (power) {
      beat.volume = volume;
      beat.play();
    }
  };

  const handleClick = (event) => {
    if (power) {
      playBeat(event.target.children[0]);
      setDisplay(event.target.id);
    }
  };

  const handleChange = (event) => {
    if (power) {
      setVolume(event.target.value / 100);
      setDisplay(`Volume: ${Math.round(volume * 100)} %`);
    }
  };

  const keys = Object.keys(beats);

  return (
    <div id="drum-machine">
      <div id="logo">Logo</div>
      <DrumPad handleClick={handleClick} beats={beats} keys={keys} />
      <Controls
        volume={volume}
        handleChange={handleChange}
        power={power}
        togglePower={togglePower}
        display={display}
      />
    </div>
  );
};

export default App;
