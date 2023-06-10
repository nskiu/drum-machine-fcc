const Controls = ({
  volume,
  handleVolume,
  power,
  togglePower,
  display,
  sets,
  select,
  changeBeats,
}) => {
  console.log(select);
  return (
    <div id="controls">
      <div id="power-btn">
        <div onClick={togglePower}>
          <i
            className={`fas fa-power-off ${power ? "power-on" : "power-off"}`}
          ></i>
        </div>
      </div>
      <div id="display">
        <p>{display}</p>
      </div>
      <div id="volume-control">
        <input
          type="range"
          value={volume * 100}
          onChange={handleVolume}
          className="slider"
        ></input>
      </div>
      <div className="set-buttons">
        {sets.map((set, index) => {
          return (
            <div
              id={set}
              key={set}
              onClick={changeBeats}
              className={`setter ${power && select === set ? "selected" : ""}`}
            >
              {`SET ${index + 1}`}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Controls;
