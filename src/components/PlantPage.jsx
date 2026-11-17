import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";
const API_URL="http://localhost:6001/plants";
function PlantPage() {
  const [plants, setPlants] = useState([]);

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
