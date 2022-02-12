import React, { useState, useEffect } from 'react';
import fireDb from "../firebase";
import { Link } from 'react-router-dom';

import '../styles/home.css'

// IMAGES
import snake from "../images/snake.jpg"
import fiddle from "../images/fiddle.jpg"
import dragon from "../images/dragon.jpg"

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fireDb.child("plants").on("value", (snapshot) => {
      if(snapshot.val() !== null) {
        setData({...snapshot.val()})
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);

 const imgArray = [
  {
    filename: snake,
    sn: "Sansevieria Trifasciata"
  },
  {
    filename: fiddle,
    sn: "Ficus Lyrata"
  },
  {
    filename: dragon,
    sn: "Dracaena Marginata"
  }
]

const image = Object.keys(data).map((id) => {
  return data.id
})
console.log(image)

  return (
    <div className="page--container">
      <div className="all-plants--container">
            {Object.keys(data).map((id) => {
              return (
                <div className="plant--container">
                  <div className="thumbnail--img">
                    <img src={data.filename} />
                  </div>
                  <div className="thumbnail--summary">
                    <h2>{data[id].cn}</h2>
                    <h4>{data[id].sn}</h4>
                  </div>
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default Home