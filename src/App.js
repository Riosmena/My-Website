import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

import Home from "./Views/Home";
import About from "./Views/About";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>  
    </>
  );
}

export default App