import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Table from "./pages/Table";
import Navbar from "./Components/Navbar"; 
import CurrencyDetail from "./pages/CurrencyDetail";
import Contect from "./pages/Contect";
import Favrate from "./pages/Favrate";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favrate" element={<Favrate />} />
          <Route path="/table" element={<Table />} />
          <Route path="/currency/:id" element={<CurrencyDetail />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
