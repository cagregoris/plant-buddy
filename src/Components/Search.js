import React, {useEffect, useState} from 'react';
import { useLocation, Link } from 'react-router';
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase';
import '../styles/view.css'

const Search = () => {
  const [plants, setPlants] = useState([]);

  const plantsReference = collection(db, "plants");

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  let search = query.get("name")

  console.log(search)

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
      const common = plant.common;
      const scientific = plant.scientific;
      if(common.toLowerCase().includes(search) || scientific.toLowerCase().includes(search)) {
        plantArray.push(plant)
      }
    }
    return plantArray;
  }

  console.log("searched plant function", searchedPlant())

  const searchy = searchedPlant();

  return (
    <div className="search--container">
    {searchy.map((result) => {
      return (
        <div className="view--container">
            <div className="img-div">
              <img className="plant--img" src={result.image} />
            </div>
            <div className="view-info--div">
              <div className="view-left">
                <h1>{result.common}</h1>
                <h3>{result.scientific}</h3>
              </div>
              <div className="view-right">
                <div className="grid-square">
                  <h4>Light</h4>
                  <span>{result.light}</span>
                </div>
                <div className="grid-square">
                  <h4>Water</h4>
                  <span>{result.water}</span>
                </div>
                <div className="grid-square">
                  <h4>Growth</h4>
                  <span>{result.growth}</span>
                </div>
                <div className="grid-square">
                  <h4>Fertilizer</h4>
                  <span>{result.fertilizer}</span>
                </div>
                <div className="grid-square">
                  <h4>Repotting</h4>
                  <span>{result.repotting}</span>
                </div>
                <div className="grid-square">
                  <h4>Propagation</h4>
                  <span>{result.propagation}</span>
                </div>
                <div className="grid-square">
                  <h4>Toxicity</h4>
                  <span>{result.toxicity}</span>
                </div>
              </div>
            </div>
        </div>
      )
    })}
    </div>
  )
}

export default Search