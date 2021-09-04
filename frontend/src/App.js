import './App.css';
import React,{useState, Fragment} from 'react';
import Quiz from './Pages/Quiz'
import IsTriangle from './Pages/IsTriangle'
import Hypotenuse from "./Pages/Hypotenuse";
import AreaOfTriangle from "./Pages/AreaOfTriangle";
import Menu from './Pages/Menu';
import Footer from './Layout/Footer';

const App = ()=> {
  const [currentPage, setCurrentPage] = useState('menu')
  const buttonClickHandler = (page) => {setCurrentPage(page)};
  return (
		<Fragment>
			<div className='App'>
				{currentPage !== "menu" && (
					<h3 className='heading-home'>
						<a href='/' className='link'>Home</a>{" "}
					</h3>
				)}
				{currentPage === "menu" && (
					<Menu buttonClickHandler={buttonClickHandler} />
				)}
				{currentPage === "quiz" && <Quiz />}
				{currentPage === "area" && <AreaOfTriangle />}
				{currentPage === "hypo" && <Hypotenuse />}
				{currentPage === "check" && <IsTriangle />}
			</div>
				<Footer />
		</Fragment>
	);
}

export default App;