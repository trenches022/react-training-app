import "./Exercises.css";

const Fullbody = () => {
  const exercises = [
    {
      id: 1,
      name: "Przysiady (Squats)",
      description: "Wzmacniają nogi i pośladki, poprawiają stabilizację.",
      image: 'https://static.strengthlevel.com/images/exercises/bodyweight-squat/bodyweight-squat-800.jpg',
    },
    {
      id: 2,
      name: "Pompki (Push-ups)",
      description: "Wzmacniają klatkę piersiową, ramiona i core.",
      image: 'https://static.strengthlevel.com/images/exercises/push-ups/push-ups-800.jpg',
    },
    {
      id: 3,
      name: "Martwy ciąg (Deadlift)",
      description: "Angażuje plecy, nogi i rownież dobrze pośladki.",
      image: 'https://static.strengthlevel.com/images/exercises/deadlift/deadlift-400.avif',
    },
  ];

  return (
    <div className="workout-container">
      <h2>Full Body Workout</h2>
      <p className="workout-level">Poziom: 🟢 Początkujący</p>
      <p className="workout-description">
        Trening całego ciała (Full Body) angażuje wszystkie główne grupy mięśniowe. 
        Doskonały dla osób początkujących i tych, którzy chcą poprawić swoją ogólną siłę.
      </p>

      <h3>Plan treningowy</h3>
      <div className="exercise-list">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="exercise-item">
            <img src={exercise.image} alt={exercise.name} className="exercise-img" />
            <div>
              <h4>{exercise.name}</h4>
              <p>{exercise.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="start-btn">🚀 Rozpocznij trening</button>
    </div>
  );
};

export default Fullbody;
