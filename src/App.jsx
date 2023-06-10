import Controls from "./components/Controls";
import DrumPad from "./components/DrumPad";
import sounds from "./assets/sounds.js";
import { useState } from "react";

const text = sounds;

const App = () => {
  const [beats, setBeats] = useState(text.set1);
  const handleClick = () => {
    console.log("clicked");
  };
  console.log(beats);
  return (
    <div id="drum-machine">
      <div id="logo">Logo</div>
      <DrumPad handleClick={handleClick} beats={beats} />
      <Controls />
    </div>
  );
};

export default App;
