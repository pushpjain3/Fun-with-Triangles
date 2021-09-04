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
			<div className='page-heading'>
				Check if the shape is a{" "}
				<span className='page-heading-special'>valid triangle</span>:
			</div>
			<div className='angles-input question-box'>
				<label htmlFor='angle-a' className='label-input'>
					Angle A
				</label>
				<input
					id='angle-a'
					type='number'
					className='input-box'
					value={angle_A}
					onChange={(e) => setangle_A(e.target.value)}
				/>
				<label htmlFor='angle-b' className='label-input'>
					Angle B
				</label>
				<input
					id='angle-b'
					className='input-box'
					type='number'
					value={angle_B}
					onChange={(e) => setangle_B(e.target.value)}
				/>
				<label htmlFor='angle-c' className='label-input'>
					Angle C
				</label>
				<input
					id='angle-c'
					className='input-box'
					type='number'
					value={angle_C}
					onChange={(e) => setangle_C(e.target.value)}
				/>
				<button
					onClick={submitButtonClickHandler}
					className='input-box input-button'
				>
					Submit
				</button>
				{isTriangle && clicked && (
					<div className='output-box'>Yes it is a triangle.</div>
				)}
				{!isTriangle && clicked && (
					<div className='output-box'>No it is not a triangle.</div>
				)}
			</div>
		</div>
	);
}

export default IsTriangle;
