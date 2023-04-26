import "./App.css"

import { useState, useEffect } from 'react';
import { getAllStarships } from './services/Sw-api';
import Card from "./components/Card";

function App() {
  const [starships, setStarships] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllStarships()
      setStarships(data)
    }
    fetchData()
  }, [])


  return (
    <div className="starshipContainer">
      {starships? starships.map(starship => (
        <Card props={starship}/>
      )) : <div>loading...</div>}
    </div>
  );
}

export default App;
