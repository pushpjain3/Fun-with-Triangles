import React, { useState } from "react";

function IsTriangle() {
	const [clicked, setclicked] = useState(false);
	const submitButtonClickHandler = () => {
		setclicked(true);
		triangleChecker();
	};

	const triangleChecker = () => {
		if (Number(angle_A) + Number(angle_B) + Number(angle_C) === 180) {
			setisTriangle(true);
		} else {
			setisTriangle(false);
		}
	};

	const [isTriangle, setisTriangle] = useState(false);
	const [angle_A, setangle_A] = useState(0);
	const [angle_B, setangle_B] = useState(0);
	const [angle_C, setangle_C] = useState(0);
	return (
		<div>
			<h3>Home</h3>
			<div>Check if the shape is a valid triangle:</div>
			<div className='angles-input'>
				<label htmlFor='angle-a'>Angle A</label>
				<input
					id='angle-a'
					type='number'
					value={angle_A}
					onChange={(e) => setangle_A(e.target.value)}
				/>
				<label htmlFor='angle-b'>Angle B</label>
				<input
					id='angle-b'
					type='number'
					value={angle_B}
					onChange={(e) => setangle_B(e.target.value)}
				/>
				<label htmlFor='angle-c'>Angle C</label>
				<input
					id='angle-c'
					type='number'
					value={angle_C}
					onChange={(e) => setangle_C(e.target.value)}
				/>
				<button onClick={submitButtonClickHandler}></button>
				{isTriangle && clicked && <div>Yes it is a triangle.</div>}
			</div>
		</div>
	);
}

export default IsTriangle;
