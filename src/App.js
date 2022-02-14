import React, {useEffect} from "react";
import {addFiddleImg, addSnakeImg, addDragonImg, addPothosImg, addSpiderImg, addPeaceImg, addAloeImg, addRubberImg, addJadeImg, addDonkeyImg, addCheeseImg, addPileaImg} from './database'

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//Components
import Home from "./Components/Home";
import View from "./Components/View";
import Search from "./Components/Search";
import Intro from "./Components/Intro";

// styles
import './app.css'

function App() {

  useEffect(() => {
      
    addSnakeImg();
    addFiddleImg();
    addDragonImg();
    addPothosImg();
    addSpiderImg();
    addPeaceImg();
    addAloeImg();
    addRubberImg();
    addJadeImg();
    addDonkeyImg();
    addCheeseImg();
    addPileaImg();
    
  
  }, [])

  return (
    <Router >
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Intro/>} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/view/:id" exact element={<View/>} />
          <Route path="/search" exact element={<Search/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
