import './App.css';
import React,{useState} from 'react';
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
  <div className='App'>
    {currentPage === "menu" && <Menu buttonClickHandler={buttonClickHandler} />}
    {currentPage ==="quiz" && <Quiz/>}
    {currentPage ==='area' && <AreaOfTriangle/>}
    {currentPage ==="hypo" && <Hypotenuse/>}
    {currentPage ==="check" && <IsTriangle/>}
    <Footer/>
    </div>
    );
}

export default App;