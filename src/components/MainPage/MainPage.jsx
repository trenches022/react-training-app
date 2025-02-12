import './MainPage.css';
import { Link } from 'react-router-dom';

const MainPage = () => {

  const reasonsList = [
    {
      id: 1,
      text: '1. Poprawa zdrowia psychicznego - Regularne ćwiczenia pomagają w walce ze stresem, lękiem i depresją, poprawiając nastrój i samopoczucie.'
    },
    {
      id: 2,
      text: '2. Zwiększenie poziomu energii - Regularna aktywność fizyczna daje więcej energii do codziennych obowiązków i poprawia wydolność organizmu.'
    },
    {
      id: 3,
      text: '3. Lepsza jakość snu - Aktywność fizyczna sprzyja głębszemu i bardziej regenerującemu snu.'
    },
    {
      id: 4,
      text: '4. Wzmocnienie układu sercowo-naczyniowego - Ćwiczenia poprawiają pracę serca i naczyń krwionośnych, co zmniejsza ryzyko chorób serca'
    },
    {
      id: 5,
      text: '5. Zwiększenie siły i wytrzymałości mięśniowej - Regularne ćwiczenia pomagają budować siłę i poprawiają ogólną kondycję fizyczną.'
    },
    {
      id: 6,
      text: '6. Redukcja ryzyka chorób przewlekłych - Regularna aktywność zmniejsza ryzyko cukrzycy, nadciśnienia, otyłości i innych chorób cywilizacyjnych.'
    },
    {
      id: 7,
      text: '7. Poprawa postawy ciała - Ćwiczenia wzmacniają mięśnie pleców i brzucha, co wpływa na lepszą postawę i redukuje bóle pleców.'
    },
    {
      id: 8,
      text: '8. Zwiększenie pewności siebie - Osiąganie celów treningowych poprawia samoocenę i motywację do dalszych działań.'
    },
    {
      id: 9,
      text: '9. Lepsza kondycja psychiczna - Regularne ćwiczenia wpływają na lepszą koncentrację, klarowność myślenia i pozytywne nastawienie do życia.'
    },
    {
      id: 10,
      text: '10. Zwiększenie mobilności i elastyczności - Ćwiczenia, takie jak stretching, poprawiają zakres ruchu i elastyczność stawów.'
    },
  ]

  return (
    <div className="main-page-container">
      <h3>Witaj w <span style={{color: '#2575fc'}}>GymApp!</span></h3>
      <h3><i className="fa-regular fa-circle-check" style={{color: '#2575fc'}}></i> Dlaczego warto zacząć?</h3>
      <div className="main-page-list">
        {reasonsList.map((reason) => (
          <div key={reason.id} className="reason">
            <h4>{reason.text}</h4>
          </div>
        ))}
      </div>
      <Link to='/workouts'><button className='start-btn'>Zacznij teraz</button></Link>
    </div>
  )
}

export default MainPage;