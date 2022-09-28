import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import About from './About.js';

export default function Outsrc() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/About" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
