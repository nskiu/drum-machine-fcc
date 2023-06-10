import Controls from "./components/Controls";
import DrumPad from "./components/DrumPad";
import sounds from "./assets/sounds.js";
import { useEffect, useState } from "react";

const file = sounds;

const App = () => {
  const [power, setPower] = useState(true);
  const [beats, setBeats] = useState(file.set1);
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
      setDisplay(event.target.id);
      playBeat(event.target.children[0]);
    }
  };

  const handleVolume = (event) => {
    if (power) {
      setVolume(event.target.value / 100);
      setDisplay(`Volume: ${Math.round(volume * 100)} %`);
    }
  };

  const changeBeats = (event) => {
    if (power) {
      setBeats(file[event.target.value]);
      setDisplay(event.target.value);
    }
  };

  const keys = Object.keys(beats);
  const sets = Object.keys(file);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keydown = event.key.toUpperCase();
      document.getElementById(beats[keydown].name).click();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [beats]);

  return (
    <div id="drum-machine">
      <div id="logo">Logo</div>
      <DrumPad handleClick={handleClick} beats={beats} keys={keys} />
      <Controls
        volume={volume}
        handleVolume={handleVolume}
        power={power}
        togglePower={togglePower}
        display={display}
        sets={sets}
        changeBeats={changeBeats}
      />
    </div>
  );
};

export default App;
