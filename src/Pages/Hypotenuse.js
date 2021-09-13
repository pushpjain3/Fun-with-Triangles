import React, { useState } from "react";

function Hypotenuse() {
  const [clicked, setclicked] = useState(false);
  const submitButtonClickHandler = () => {
    setclicked(true);
    hypotenuseCalculator();
  };

  const hypotenuseCalculator = () => {
    var sideA = Number(side_A);
    var sideB = Number(side_B);
    var sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    if (sideA > 0 && sideB > 0) setisHypotenuse(sideC);
    else setclicked(false);
  };

  const [hypotenuse, setisHypotenuse] = useState(0);
  const [side_A, setside_A] = useState(0);
  const [side_B, setside_B] = useState(0);
  return (
    <div>
      <div className="page-heading">
        Calculate the <span className="page-heading-special">Hypotenuse</span>{" "}
        of the triangle:
      </div>
      <div className="angles-input question-box">
        <label htmlFor="angle-a" className="label-input">
          Side A
        </label>
        <input
          id="angle-a"
          type="number"
          className="input-box"
          value={side_A}
          onChange={(e) => setside_A(e.target.value)}
        />
        <label htmlFor="angle-b" className="label-input">
          Side B
        </label>
        <input
          id="angle-b"
          className="input-box"
          type="number"
          value={side_B}
          onChange={(e) => setside_B(e.target.value)}
        />
        <label htmlFor="angle-c" className="label-input ">
          Hypotenuse
        </label>

        <div className="output-box">{clicked && <div>{hypotenuse}</div>}</div>
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

export default Hypotenuse;
