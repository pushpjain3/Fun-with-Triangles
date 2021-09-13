import React, { useState } from "react";

function AreaOfTriangle() {
  const [clicked, setclicked] = useState(false);
  const submitButtonClickHandler = () => {
    setclicked(true);
    areaCalculator();
  };

  const areaCalculator = () => {
    var a = Number(side_A);
    var b = Number(side_B);
    var c = Number(side_C);
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    if (a > 0 && b > 0 && c > 0) setisArea(area);
    else setclicked(false);
  };

  const [Area, setisArea] = useState(0);
  const [side_A, setside_A] = useState(0);
  const [side_B, setside_B] = useState(0);
  const [side_C, setside_C] = useState(0);
  return (
    <div>
      <div className="page-heading">
        Calculate the <span className="page-heading-special">Area</span> of the
        triangle:
      </div>
      <div className="angles-input question-box">
        <label htmlFor="angle-a" className="label-input">
          Side A
          <input
            id="angle-a"
            type="number"
            className="input-box"
            value={side_A}
            onChange={(e) => setside_A(e.target.value)}
          />
        </label>
        <label htmlFor="angle-b" className="label-input">
          Side B
          <input
            id="angle-b"
            className="input-box"
            type="number"
            value={side_B}
            onChange={(e) => setside_B(e.target.value)}
          />
        </label>
        <label htmlFor="angle-c" className="label-input">
          Side C
          <input
            id="angle-c"
            className="input-box"
            type="number"
            value={side_C}
            onChange={(e) => setside_C(e.target.value)}
          />
        </label>
        <label htmlFor="output-box" className="label-input">
          Area Of Triangle
          <div id="output-box" className="output-box">
            {clicked && <div>{clicked && <div>{Area}</div>}</div>}
          </div>
        </label>

        <button
          onClick={submitButtonClickHandler}
          className="input-box input-button"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AreaOfTriangle;
