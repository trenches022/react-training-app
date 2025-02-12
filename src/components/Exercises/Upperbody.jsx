import "./Exercises.css";

const Upperbody = () => {
  const exercises = [
    { id: 1, name: "Wyciskanie na ławce", description: "Klatka piersiowa, triceps", image: 'https://static.strengthlevel.com/images/exercises/bench-press/bench-press-400.avif'},
    { id: 2, name: "Podciąganie", description: "Plecy, bicepsy", image: 'https://static.strengthlevel.com/images/exercises/pull-ups/pull-ups-400.avif'},
    { id: 3, name: "Wyciskanie nad głowę", description: "Barki, triceps", image:  'https://static.strengthlevel.com/images/exercises/shoulder-press/shoulder-press-400.avif'},
  ];

  return (
    <div className="workout-container">
      <h2>Upper Body Workout</h2>
      <p className="workout-level">Poziom: 🟡 Średniozaawansowany</p>
      <p className="workout-description">Trening górnej części ciała skupia się na klatce, plecach, barkach i ramionach.</p>
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

export default Upperbody;
