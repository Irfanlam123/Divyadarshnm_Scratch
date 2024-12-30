import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import { Puja } from "./Components/Puja/Puja";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermCondition from "./Components/TermCondition/TermCondition";
import CancelRefund from "./Components/CancelAndRedundPolicy/CancelRefund";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puja" element={<Puja />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/CancelRefund" element={<CancelRefund />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermCondition" element={<TermCondition />} />
      </Routes>
    </Router>
  );
};

export default App;
