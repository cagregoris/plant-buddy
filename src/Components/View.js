import React, { useState, useEffect } from 'react';
import db from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import { useNavigate, useParams, Link } from "react-router-dom";
import '../styles/view.css';

const View = () => {
  const [plants, setPlants] = useState([]);

  const plantsReference = collection(db, "plants");

  const {id} = useParams();
  console.log("type of params", typeof id)

  useEffect(() => {
    const searchData = async() => {
        const data = await getDocs(plantsReference);
        setPlants(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
      }
    
    searchData();
    
  }, [])


  const searchedPlant = function() {
    let plantArray = []
    for (let plant of plants) {
      if (plant.id === id) {
        plantArray.push(plant.image, plant.common, plant.scientific, plant.light, plant.water, plant.growth, plant.fertilizer, plant.repotting, plant.propagation, plant.toxicity)
      }
    }
    return plantArray;
  }

  const newArray = searchedPlant();
  console.log("THIS IS NEW ARRAY", newArray)
 


  return (
    <div className="view--container">
      <div className="img-div">
        <img className="plant--img" src={newArray[0]} />
      </div>
      <div className="view-info--div">
        <div className="view-left">
          <h1>{newArray[1]}</h1>
          <h3>{newArray[2]}</h3>
        </div>
        <div className="view-right">
          <div className="grid-square">
            <h4>Light</h4>
            <span>{newArray[3]}</span>
          </div>
          <div className="grid-square">
            <h4>Water</h4>
            <span>{newArray[4]}</span>
          </div>
          <div className="grid-square">
            <h4>Growth</h4>
            <span>{newArray[5]}</span>
          </div>
          <div className="grid-square">
            <h4>Fertilizer</h4>
            <span>{newArray[6]}</span>
          </div>
          <div className="grid-square">
            <h4>Repotting</h4>
            <span>{newArray[7]}</span>
          </div>
          <div className="grid-square">
            <h4>Propagation</h4>
            <span>{newArray[8]}</span>
          </div>
          <div className="grid-square">
            <h4>Toxicity</h4>
            <span>{newArray[9]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View