import React from "react";

function QuizQuestion({ question, index, scoreChange }) {
	const checkOption = (e) => {
		if (e.target.value === question["correct_option"]) {
			scoreChange(index, 1);
		} else scoreChange(index, 0);
	};
	return (
		<div className='question-box'>
			<h2>
				Q{index + 1}. {question["question_statement"]}
			</h2>
			<div onChange={checkOption} className='options-set'>
				<form>
					<label className='options' htmlFor={question["option_A"]}>
						<input
							type='radio'
							name='option'
							id={question["option_A"]}
							value={question["option_A"]}
						></input>
						{question["option_A"]}
					</label>
					<label className='options' htmlFor={question["option_B"]}>
						<input
							type='radio'
							name='option'
							id={question["option_B"]}
							value={question["option_B"]}
						></input>
						{question["option_B"]}
					</label>
					<label className='options' htmlFor={question["option_C"]}>
						<input
							type='radio'
							name='option'
							id={question["option_C"]}
							value={question["option_C"]}
						></input>
						{question["option_C"]}
					</label>
				</form>
			</div>
		</div>
	);
}

export default QuizQuestion;
