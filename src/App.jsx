import Controls from "./components/Controls";
import DrumPad from "./components/DrumPad";

const App = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div id="drum-machine">
      <div id="logo">Logo</div>
      <DrumPad handleClick={handleClick} />
      <Controls />
    </div>
  );
};

export default App;
