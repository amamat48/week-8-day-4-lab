import "./App.css"

import { useState, useEffect } from 'react';
import { getAllStarships } from './services/Sw-api';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllStarships()
      setStarships(data)
    }
    fetchData()
  }, [])


  return (
    <div className="starshipContainer">
      {starships.map(starship => (
        <div className="card" key={starship.url}>
          <div className="cardBody">{starship.name}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
