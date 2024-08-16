import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Table from "./pages/Table";
import Navbar from "./Components/Navbar";
import CurrencyDetail from "./pages/CurrencyDetail"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table />} />
          <Route path="/currency/:id" element={<CurrencyDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
