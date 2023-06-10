const Controls = ({ volume, handleChange }) => {
  return (
    <div id="controls">
      <div className="control">control</div>
      <div id="display">display</div>
      <div className="volume-control">
        <input
          type="range"
          value={volume * 100}
          onChange={handleChange}
        ></input>
      </div>
      <div className="control">control</div>
    </div>
  );
};

export default Controls;
