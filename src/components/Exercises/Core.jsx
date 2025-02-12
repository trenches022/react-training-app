import "./Exercises.css";

const Core = () => {
  const exercises = [
    { id: 1, name: "Brzuszki klasyczne", description: "Górne mięśnie brzucha", image: 'https://static.strengthlevel.com/images/exercises/sit-ups/sit-ups-400.avif'},
    { id: 2, name: "Unoszenie nóg na drążku", description: "Dolne mięśnie brzucha", image: 'https://static.strengthlevel.com/images/exercises/hanging-leg-raise/hanging-leg-raise-400.avif'},
    { id: 3, name: "Brzuszki rowerowe", description: "Dolne i górne mięśnie brzucha", image:  'https://static.strengthlevel.com/images/exercises/bicycle-crunch/bicycle-crunch-400.avif'},
  ];

  return (
    <div className="workout-container">
      <h2>Core Workout</h2>
      <p className="workout-level">Poziom: 🟢 Początkujący</p>
      <p className="workout-description">Trening całkowicie skupia się na mięśniach brzucha.</p>
      <h3>Plan treningowy</h3>
      <div className="exercise-list">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="exercise-item">
            <img src={exercise.image} alt={exercise.name} className="exercise-img" />
            <div><h4>{exercise.name}</h4><p>{exercise.description}</p></div>
          </div>
        ))}
      </div>
      <button className="start-btn">🚀 Rozpocznij trening</button>
    </div>
  );
};

export default Core;
