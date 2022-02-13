import React, {useEffect} from "react";
import { doc, setDoc } from "firebase/firestore";
import db from './firebase';
import {addFiddleImg, addSnakeImg, addDragonImg, addPothosImg, addSpiderImg} from './database'

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//Components
import Home from "./Components/Home";
import View from "./Components/View";

//IMAGES
import snake from './images/snake.jpg';
import fiddle from "./images/fiddle.jpg"
import dragon from "./images/dragon.jpg"


function App() {

  useEffect(() => {
      
    addSnakeImg();
    addFiddleImg();
    addDragonImg();
    addPothosImg();
    addSpiderImg();
    
  
  }, [])

  return (
    <Router >
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/view/:id" exact element={<View/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
