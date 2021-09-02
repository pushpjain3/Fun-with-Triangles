import React from 'react'

function QuizQuestion({question,index, scoreChange}) {
    const checkOption =(e)=>{
        if(e.target.value === question['correct_option']){
            scoreChange(index,1)
        }
        else
            scoreChange(index,0)
    }
    return (
			<div className='question-box'>
				<h2>
					Q{index + 1}. {question["question_statement"]}
				</h2>
				<div onChange={checkOption} className='options-set'>
					<form>
						<input
							type='radio'
							name='option'
							value={question["option_A"]}
							className='options'
						/>
						{question["option_A"]}
						<input
							type='radio'
							name='option'
							value={question["option_B"]}
							className='options'
						/>
						{question["option_B"]}
						<input
							type='radio'
							name='option'
							value={question["option_C"]}
							className='options'
						/>
						{question["option_C"]}
					</form>
				</div>
			</div>
		);
}

export default QuizQuestion
