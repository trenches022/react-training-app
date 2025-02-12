import "./Exercises.css";

const Yoga = () => {
  const exercises = [
    { id: 1, name: "Uginanie się do nóg", description: "Rozciągnięcie mięśni nóg, pleców", image: 'https://ic.pics.livejournal.com/loco_bird/12654769/868998/868998_original.jpg'},
    { id: 2, name: "Schylanie się w boki", description: "Side-mięśnie brzucha, nogi", image: 'https://ic.pics.livejournal.com/loco_bird/12654769/864776/864776_original.jpg'},
    { id: 3, name: "Stanie na rękach z zarzuconymi nogami", description: "Barki, mięśnie brzucha i nóg", image:  'https://ic.pics.livejournal.com/loco_bird/12654769/868845/868845_original.jpg'},
  ];

  return (
    <div className="workout-container">
      <h2>Yoga</h2>
      <p className="workout-level">Poziom: 🟡 Średniozaawansowany</p>
      <p className="workout-description">Trening skupia się na zwiększeniu mobilności.</p>
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

export default Yoga;
