const DrumPad = ({ handleClick, beats, keys, power }) => {
  return (
    <div id="drumpad">
      {keys.map((key) => {
        return (
          <div
            className={`drum-pad ${power ? "drum-on" : ""}`}
            key={key}
            onClick={handleClick}
            id={{ ...beats[key] }.name}
          >
            {key}
            <audio
              className="clip"
              id={key}
              src={{ ...beats[key] }.source}
            ></audio>
          </div>
        );
      })}
    </div>
  );
};

{
}
export default DrumPad;
