import React,{useState} from 'react'

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
            var s = (a+b+c)/2;
            var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
            setisArea(area);
		};

		const [Area, setisArea] = useState(0);
		const [side_A, setside_A] = useState(0);
		const [side_B, setside_B] = useState(0);
		const [side_C, setside_C] = useState(0);
		return (
			<div>
				<h3>
					<a href='/'>Home</a>{" "}
				</h3>
				<div>Calculate the area of the triangle:</div>
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
						Side C
					</label>
					<input
						id='angle-c'
						className='input-box'
						type='number'
						value={side_C}
						onChange={(e) => setside_C(e.target.value)}
					/>
					<label htmlFor='output-box' className='label-input'>
						Area Of Triangle
					</label>

					<div id='output-box' className='outbut-box'>
						{clicked && (
							<div>{clicked && <div>{Area}</div>}</div>
						)}
					</div>
					<button onClick={submitButtonClickHandler} className='input-box'>
						Submit
					</button>
				</div>
			</div>
		);
}

export default AreaOfTriangle
