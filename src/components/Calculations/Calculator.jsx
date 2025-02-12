import { useState } from 'react';
import './Calculator.css'

const Calculator = () => {

  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [oneRepMax, setOneRepMax] = useState(null);

  const calculate1RM = () => {
    if (!weight || !reps || reps < 1) {
      setOneRepMax('Podaj poprawne wartości!');
      return;
    }

    const max = Math.round(weight * (1 + reps / 30))
    setOneRepMax(max)

  }

  return (
    <div className="calculator-container">
      <h2>Kalkulator ciężaru maksymalnego</h2>
      <h3>Sprawdź, ile wyciśniesz na raz</h3>
      <input 
      type="number" 
      placeholder="Ciężar (kg)"
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
      />
      <input 
      type="number" 
      placeholder="Powtórzenia"
      value={reps}
      onChange={(e) => setReps(e.target.value)}
      />
      <button className="calculator-btn" onClick={calculate1RM}>Sprawdź</button>
      {oneRepMax !== null && <h3 className="result">Twój max na 1 powtórzenie: {oneRepMax} kg</h3>}
    </div>
  )
}

export default Calculator;