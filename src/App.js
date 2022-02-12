import React from "react";

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//Components
import Home from "./Components/Home";
import View from "./Components/View";

function App() {
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
