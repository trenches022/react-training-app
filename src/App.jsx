import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainPage from './components/MainPage/MainPage';
import Exercises from './components/Exercises/Exercises';
import Calculator from './components/Calculations/Calculator';
import Notes from './components/Notes/Notes';
import Fullbody from './components/Exercises/Fullbody';
import Upperbody from './components/Exercises/Upperbody';
import Lowerbody from './components/Exercises/Lowerbody';
import Cardio from './components/Exercises/Cardio';
import Flexibility from './components/Exercises/Flexibility';
import Core from './components/Exercises/Core';
import Strength from './components/Exercises/Strength';
import Yoga from './components/Exercises/Yoga';
import Split from './components/Exercises/Split';

function App() {

  return (
    <>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/workouts' element={<Exercises />}/>
            <Route path='/calculator' element={<Calculator />}/>
            <Route path='/workouts/fullbody' element={<Fullbody />}/>
            <Route path='/workouts/upperbody' element={<Upperbody />}/>
            <Route path='/workouts/lowerbody' element={<Lowerbody />}/>
            <Route path='/workouts/cardio' element={<Cardio />}/>
            <Route path='/workouts/flexibility' element={<Flexibility />}/>
            <Route path='/workouts/core' element={<Core />}/>
            <Route path='/workouts/strength' element={<Strength />}/>
            <Route path='/workouts/yoga' element={<Yoga />}/>
            <Route path='/workouts/split' element={<Split />}/>
            <Route path='/notes' element={<Notes />}/>
          </Routes>
          <footer>
            <Link to='/'><i className="fa-solid fa-house-user"></i></Link>
            <Link to='/workouts'><i className="fa-solid fa-dumbbell"></i></Link>
            <Link to='/calculator'><i className="fa-solid fa-calculator"></i></Link>
            <Link to='/notes'><i className="fa-solid fa-pen-to-square"></i></Link>
          </footer>
        </div>
      </Router>
    </>
  )
}

export default App
