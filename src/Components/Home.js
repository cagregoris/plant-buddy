import React, { useState, useEffect } from 'react';
import db from "../firebase";
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore"

import '../styles/home.css'

const Home = () => {
  const [plants, setPlants] = useState([]);
  const plantsReference = collection(db, "plants")

  
  useEffect(() => {
    
    const getPlants = async() => {
      const data = await getDocs(plantsReference);
      setPlants(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }
    
    getPlants()

  }, [])


  return (
    <div className="page--container">
      {plants.map((plant) => {
        return <div>
          <h1>{plant.common}</h1>
          <h1>{plant.id}</h1>
          <img src={plant.image} style={{width: "400px"}} />
        </div>
      })}
    </div>
  )
}

export default Home