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
  const [select, setSelect] = useState("");

  const togglePower = () => {
    setPower(!power);
    setDisplay("");
  };

  const playBeat = (beat) => {
    if (power) {
      beat.volume = volume;
      beat.load();
      beat.play();
    }
  };

  const handleClick = (event) => {
    if (power) {
      setDisplay(event.target.id.toUpperCase());
      playBeat(event.target.children[0]);
    }
  };

  const handleVolume = (event) => {
    if (power) {
      let volume = event.target.value / 100;
      setVolume(volume);
      setDisplay(`VOLUME: ${Math.round(volume * 100)} %`);
    }
  };

  const changeBeats = (event) => {
    if (power) {
      let value = event.target.id;
      setBeats(file[value]);
      setDisplay(value);
      setSelect(value);
    }
  };

  const keys = Object.keys(beats);
  const sets = Object.keys(file);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keydown = event.key.toUpperCase();
      if (!keys.includes(keydown)) return;
      const button = document.getElementById(beats[keydown].name);
      button.click();
      button.classList.add("keydown");
      setTimeout(() => {
        button.classList.remove("keydown");
      }, 300);
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
        select={select}
        changeBeats={changeBeats}
      />
    </div>
  );
};

export default App;
