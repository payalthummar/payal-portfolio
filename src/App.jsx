import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EN from "./components/EN";
import DE from "./components/DE/DE";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        <Route path={"/"} element={<DE />} />
        <Route path={"/en"} element={<EN />} />{" "}
      </Routes>
      <p className="footer">
        <small>Copyright Payal Thummar 2023</small>
      </p>
    </Router>
  );
}

export default App;
