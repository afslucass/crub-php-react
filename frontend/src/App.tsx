import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Report from "./pages/Report";
import "./styles/index.sass";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/clients" element={<Report />} />
        <Route path="/clients/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
