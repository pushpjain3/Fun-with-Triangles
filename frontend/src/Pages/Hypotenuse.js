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
		setisHypotenuse(sideC);
	};

	const [hypotenuse, setisHypotenuse] = useState(0);
	const [side_A, setside_A] = useState(0);
	const [side_B, setside_B] = useState(0);
	return (
		<div>
			<h3>
				<a href='/'>Home</a>{" "}
			</h3>
			<div>Calculate the Hypotenuse of the triangle:</div>
			<div className='angles-input'>
				<label htmlFor='angle-a' className='label-input'>
					Side A
				</label>
				<input
					id='angle-a'
					type='number'
					className='input-box'
					value={side_A}
					onChange={(e) => setside_A(e.target.value)}
				/>
				<label htmlFor='angle-b' className='label-input'>
					Side B
				</label>
				<input
					id='angle-b'
					className='input-box'
					type='number'
					value={side_B}
					onChange={(e) => setside_B(e.target.value)}
				/>
				<label htmlFor='angle-c' className='label-input'>
					Hypotenuse
				</label>

				<div className='outbut-box'>{clicked && <div>{hypotenuse}</div>}</div>
				<button onClick={submitButtonClickHandler} className='input-box'>
					Submit
				</button>
			</div>
		</div>
	);
}

export default Hypotenuse;
