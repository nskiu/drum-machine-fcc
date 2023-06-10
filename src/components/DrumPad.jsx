const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const DrumPad = ({ handleClick, beats }) => {
  return (
    <div id="drumpad">
      {keys.map((key) => {
        return (
          <div
            className="drum-pad"
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
