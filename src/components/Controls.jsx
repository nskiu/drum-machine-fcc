const Controls = ({
  volume,
  handleVolume,
  power,
  togglePower,
  display,
  sets,
  changeBeats,
}) => {
  return (
    <div id="controls">
      <div id="power-btn">
        <button onClick={togglePower}>{power ? <>ON</> : <>OFF</>}</button>
      </div>
      <div id="display">
        <p>{display}</p>
      </div>
      <div className="volume-control">
        <input
          type="range"
          value={volume * 100}
          onChange={handleVolume}
        ></input>
      </div>
      <div className="control">
        {sets.map((set) => {
          return (
            <button value={set} key={set} onClick={changeBeats}>
              {set}
            </button>
          );
        })}
        {/* <button value="set1">Set 1</button>
        <button value="set2">Set 2</button>
        <button value="set3">Set 3</button> */}
      </div>
    </div>
  );
};

export default Controls;
