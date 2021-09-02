import React,{useState} from 'react';
import QuizQuestion from '../Layout/QuizQuestion';

const Questions = [
	{
		question_statement:
			"If a triangle has two sides as 7 and 9, the third side can be?",
		option_A: "10",
		option_B: "18",
		option_C: "both",
		correct_option: "10",
	},
	{
		question_statement:
			"If two angles of a Triangle are 40 degrees, it is a/an?",
		option_A: "Isosceles Triangle",
		option_B: "Equilateral Triangle",
		option_C: "Scalene Triangle",
		correct_option: "Isosceles Triangle",
	},
	{
		question_statement: "What are the possible number of perpendiculars from a vertex of a triangle on a side of triangle?",
		option_A: "4",
		option_B: "2",
		option_C: "1",
		correct_option: "1",
	},
	{
		question_statement: "If two angles of a triangle are 60 and 80, then the third angle is?",
		option_A: "40",
		option_B: "60",
		option_C: "80",
		correct_option: "40",
	},
	{
		question_statement: "if two sides adjacent to right angle of a right angular triangle are 8 and 6, Area of the triangle is?",
		option_A: "48",
		option_B: "24",
		option_C: "96",
		correct_option: "24",
	},
];

function Quiz() {
   const [clicked, setclicked] = useState(false);
		const submitButtonClickHandler = () => {
			setclicked(true);
            calculateScore();
		};
        const calculateScore = ()=>{
            var finalScore = 0;
            for(var i=0;i<Questions.length;i++){
                finalScore+=score[i];
            }
            settotalScore(finalScore);
        }
        const [totalScore, settotalScore] = useState(0)
		const [score, setscore] = useState([0,0,0,0,0])
        
        const scoreChange =(index,value)=>{
            var score_copy = score;
            score_copy[index] = value;
            setscore(score_copy);
        }
		
		return (
			<div>
				
				<div>Quiz, Check how much you know Triangles: </div>
				<div className='angles-input'>
                    {Questions.map((question,index) =>{
                        return (
                            <QuizQuestion question={question} key={index} index={index} scoreChange={scoreChange}/>
                        )
                    })}
					<button onClick={submitButtonClickHandler} className='input-box'>
						Submit
					</button>
					<label htmlFor='angle-c' className='label-input'>
						Score
					</label>

					<div className='outbut-box'>{clicked && <div>{totalScore}</div>}</div>
				</div>
			</div>
		);
}

export default Quiz
