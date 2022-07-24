import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Topbar from "./components/topbarComponents/Topbar";
import Home from "./components/homeComponents/Home"
import Watched from "./components/watchedComponents/Watched";
import WatchList from "./components/watchListComponents/WatchList";

import "./App.css";



function App() {

  return (

    <div className="app">
      <Router >
        
        <Topbar />

        <Routes>
          <Route path="/movie-app" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/watched" element={<Watched />} />
        </Routes>

        <Routes>
          <Route path="/watchList" element={<WatchList />} />
        </Routes>

      </Router>
    </div>



  )
}

export default App;
