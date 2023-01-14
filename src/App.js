import React from "react";
import Header from "./components/lesson1";
import CompOne from "./components/CompOne";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
        <Routes>
          <Route exact path="/" element={<CompOne/>} />
          <Route path="/lesson1" element={<Header/>} />
        </Routes>
     
    
  );
}
