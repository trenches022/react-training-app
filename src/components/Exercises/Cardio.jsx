import "./Exercises.css";

const Cardio = () => {
  const exercises = [
    { id: 1, name: "Pajacyki", description: "Wytrzymałość, kondycja", image: 'https://static.strengthlevel.com/images/exercises/jumping-jack/jumping-jack-400.avif' },
    { id: 2, name: "Brzuszki", description: "Mięśnie core", image: 'https://static.strengthlevel.com/images/exercises/crunches/crunches-400.avif' },
    { id: 3, name: "Burpees", description: "Całe ciało", image: 'https://static.strengthlevel.com/images/exercises/burpees/burpees-400.avif' },
  ];

  return (
    <div className="workout-container">
      <h2>Cardio Workout</h2>
      <p className="workout-level">Poziom: 🟢 Początkujący</p>
      <p className="workout-description">Ćwiczenia poprawiające wydolność serca i spalające tłuszcz.</p>
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

export default Cardio;
