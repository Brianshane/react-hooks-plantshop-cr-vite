import React from "react";
import PlantPage from "./PlantPage";
function NewPlantForm(newPlant){
    fetch(API_URL,{
    method :"POST" ,
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(newPlant)
  })
  .then(response => { if(!response.ok){throw new Error("could not add new item")}
    return response.json()})

  .then(data =>{setPlants([...plants ,data])})
  .catch(err => console.error(err))
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
