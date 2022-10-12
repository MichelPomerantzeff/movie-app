import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Topbar from "./components/Topbar";
import Home from "./components/Home"
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import "./App.css";

import { GlobalProvider } from "./context/GlobalState";



function App() {

  return (

    <div className="app">
      <GlobalProvider>
        <Router >

          <Topbar />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <Routes>
            <Route path="/watched" element={<Watched />} />
          </Routes>

          <Routes>
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>

        </Router>
      </GlobalProvider >
    </div>

  )
}

export default App;
