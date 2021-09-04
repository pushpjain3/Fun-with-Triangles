import React,{StrictMode} from 'react'

const Menu = ({buttonClickHandler})=> {
    return (
			<StrictMode>
				<div>
					<button
						onClick={() => buttonClickHandler("quiz")}
						className='menu-button'
					>
						Quiz
					</button>
					<button
						onClick={() => buttonClickHandler("area")}
						className='menu-button'
					>
						Area of Triangle
					</button>
				</div>
				<div>
					<button
						onClick={() => buttonClickHandler("hypo")}
						className='menu-button'
					>
						Hypotenuse
					</button>
					<button
						onClick={() => buttonClickHandler("check")}
						className='menu-button'
					>
						Check Triangle
					</button>
				</div>
			</StrictMode>
		);
}

export default Menu
