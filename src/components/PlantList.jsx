import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import PlantPage from "./PlantPage";
function PlantList() {
   const [plants, setPlants] = useState([]);

  useEffect(()=>{
  fetch(API_URL)
  .then(response =>{if(!response.ok){throw new Error("cannot load items")}
     return response.json()})
  .then(data => setPlants(data))
  .catch(err => console.error(err))
,[]})
  return (
    <ul className="cards">{plants.map(plant=>(<h3 key="plant.id">plant.name</h3>))}</ul>
  );
}

export default PlantList;
