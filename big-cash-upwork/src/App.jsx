
import couponCover from './images/card_after_4.png';
import scratchImg from './images/scratch.png';
import ScratchCard from './js/ScratchCard';
import numbers from './data/numbers.json';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Ticket from './components/Ticket';
import { useEffect, useState } from 'react';


function App() {
  let navigate = useNavigate();

  const [ticket, setTicket] = useState(numbers[0])

  useEffect(() => {
    setTicket(numbers[Math.floor(Math.random() * numbers.length)])
    navigate('/' + ticket.id);
      return () => {
        setTicket(numbers[0])
      }
  }, [ticket])
  

  return (
    <div className="wrapper">
        <Routes>
          <Route path={'/' + ticket.id} element={<Ticket ticket={ticket} />} />
        </Routes>
    </div>
  );
}

export default App;
