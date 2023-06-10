const DrumPad = ({ handleClick }) => {
  return (
    <div id="drumpad">
      <div className="drum-pad row-1 col-1" id="1" onClick={handleClick}>
        Q
      </div>
      <div className="drum-pad row-1 col-2" id="2" onClick={handleClick}>
        W
      </div>
      <div className="drum-pad row-1 col-3" id="3" onClick={handleClick}>
        E
      </div>
      <div className="drum-pad row-2 col-1" id="4" onClick={handleClick}>
        A
      </div>
      <div className="drum-pad row-2 col-2" id="5" onClick={handleClick}>
        S
      </div>
      <div className="drum-pad row-2 col-3" id="6" onClick={handleClick}>
        D
      </div>
      <div className="drum-pad row-3 col-1" id="7" onClick={handleClick}>
        Z
      </div>
      <div className="drum-pad row-3 col-2" id="8" onClick={handleClick}>
        X
      </div>
      <div className="drum-pad row-3 col-3" id="9" onClick={handleClick}>
        C
      </div>
    </div>
  );
};

export default DrumPad;
