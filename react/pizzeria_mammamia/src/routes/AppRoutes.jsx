import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes globales
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// Páginas
import Home from "../pages/Home";
import Login from "../pages/Login";


const AppRoutes = () => {
  return (
    <Router basename="/react/pizzeria_mammamia">
      <Navbar></Navbar>
    
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      
      <Footer />
    </Router>
  );
};

export default AppRoutes;
