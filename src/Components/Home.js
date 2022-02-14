import React, { useState, useEffect } from 'react';
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router';


import '../styles/home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  const plantsReference = collection(db, "plants");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?name=${search}`);
    setSearch("");
  }
  
  useEffect(() => {
    
    const getPlants = async() => {
      const data = await getDocs(plantsReference);
      setPlants(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }
    
    getPlants()

  }, [])




  return (
    <div className="page--container">
      <div className="search-bar--container">
        <h1 className="search-title">Search for a plant</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-field"
          placeholder="search plant..."
          onChange={(e) => setSearch(e.target.value)}
          value= {search}
        />
        <button className="search-btn" type="submit">Search</button>
      </form>
      </div>

      <div className="plant-list--container">
      {plants.map((plant) => {
        return <Link className="link" to={`/view/${plant.id}`}><div className="plant--box">
          <div className="img-div home-img">
              <img className="plant--img" src={plant.image} />
          </div>
          <span className="img--title">{plant.common}</span>
          <span className="img--subtitle">{plant.scientific}</span>
        </div></Link>
      })}
      </div>
    </div>
  )
}

export default Home