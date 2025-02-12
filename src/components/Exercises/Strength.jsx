import "./Exercises.css";

const Strength = () => {
  const exercises = [
    { id: 1, name: "Wyciskanie sztangi z pauzą", description: "Klatka piersiowa, triceps, wytrzymałość", image: 'https://static.strengthlevel.com/images/exercises/bench-press/bench-press-400.avif'},
    { id: 2, name: "Wiosłowanie w opadzie", description: "Plecy, bicepsy, zwiększenie siły i stabilności", image: 'https://static.strengthlevel.com/images/exercises/bent-over-row/bent-over-row-400.avif'},
    { id: 3, name: "Zakroki ze sztangą", description: "Nogi, pośladki, zwiększenie stabilności", image:  'https://static.strengthlevel.com/images/exercises/barbell-reverse-lunge/barbell-reverse-lunge-400.avif'},
  ];

  return (
    <div className="workout-container">
      <h2>Strength Training</h2>
      <p className="workout-level">Poziom: 🔴 Zaawansowany</p>
      <p className="workout-description">Trening skupia się na głównych partiach mięśniowych, klatka, plecy, nogi.</p>
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

export default Strength;
