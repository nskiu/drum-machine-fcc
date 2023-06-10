const Controls = ({ volume, handleVolume, power, togglePower, display }) => {
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
      <div className="control">control</div>
    </div>
  );
};

export default Controls;
