import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import { Puja } from "./Components/Puja/Puja";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puja" element={<Puja />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/Cancellation and Refund Policy"
          element={<h2>cancel part</h2>}
        />
        <Route path="/Privacy Policy" element={<h2>Privacy Policy</h2>} />
        <Route
          path="/Terms And Condition"
          element={<h2>Terms And Condition</h2>}
        />
      </Routes>
    </Router>
  );
};

export default App;
