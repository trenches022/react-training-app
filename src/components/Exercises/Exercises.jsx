import './Exercises.css';
import { Link } from 'react-router-dom';

const Exercises = () => {

  const workouts = [
    {
      id: 1,
      name: "Full Body",
      level: "początkujący",
      link: '/workouts/fullbody'
    },
    {
      id: 2,
      name: "Upper Body",
      level: "średniozaawansowany",
      link: '/workouts/upperbody'
    },
    {
      id: 3,
      name: "Lower Body",
      level: "zaawansowany",
      link: '/workouts/lowerbody'
    },
    {
      id: 4,
      name: "Cardio",
      level: "początkujący",
      link: '/workouts/cardio'
    },
    {
      id: 5,
      name: "Strength Training",
      level: "zaawansowany",
      link: '/workouts/strength'
    },
    {
      id: 6,
      name: "Core Workout",
      level: "początkujący",
      link: '/workouts/core'
    },
    {
      id: 7,
      name: "Flexibility",
      level: "średniozaawansowany",
      link: '/workouts/flexibility'
    },
    {
      id: 8,
      name: "Yoga",
      level: "zaawansowany",
      link: '/workouts/yoga'
    },
    {
      id: 9,
      name: "Split",
      level: "średniozaawansowany",
      link: '/workouts/split'
    },
  ];

  return (
    <div className="workouts-container">
      <h3>„Nie musisz być wielki, żeby zacząć,
      ale musisz zacząć, żeby być wielkim.”</h3>
      <div className="workouts-list">
        {workouts.map((workout) => (
          <>
            <Link to={workout.link}><div key={workout.id} className="workout">
              <h4>{workout.name}</h4>
              <p className={workout.level === 'średniozaawansowany' ? "yellow" : workout.level === "zaawansowany" 
                  ? "red" 
                  : "" }>{workout.level}</p>
            </div></Link>
          </>
        ))}
      </div>
    </div>
  )
}

export default Exercises;