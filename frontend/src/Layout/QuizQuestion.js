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
					<div className='options'>
						<input type='radio' name='option' value={question["option_A"]} />
						{question["option_A"]}
					</div>
					<div className='options'>
						<input type='radio' name='option' value={question["option_B"]} />
						{question["option_B"]}
					</div>
					<div className='options'>
						<input type='radio' name='option' value={question["option_C"]} />
						{question["option_C"]}
					</div>
				</form>
			</div>
		</div>
	);
}

export default QuizQuestion;
