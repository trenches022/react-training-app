import "./Exercises.css";

const Lowerbody = () => {
  const exercises = [
    { id: 1, name: "Przysiad ze sztangą", description: "Nogi, pośladki", image: 'https://static.strengthlevel.com/images/exercises/squat/squat-400.avif' },
    { id: 2, name: "Martwy ciąg", description: "Plecy, nogi", image: 'https://static.strengthlevel.com/images/exercises/deadlift/deadlift-400.avif' },
    { id: 3, name: "Wspięcie na palce ze sztangą", description: "Łydki", image: 'https://static.strengthlevel.com/images/exercises/barbell-calf-raise/barbell-calf-raise-400.avif' },
  ];

  return (
    <div className="workout-container">
      <h2>Lower Body Workout</h2>
      <p className="workout-level">Poziom: 🔴 Zaawansowany</p>
      <p className="workout-description">Skupia się na mięśniach nóg, pośladków i dolnej części pleców.</p>
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

export default Lowerbody;
