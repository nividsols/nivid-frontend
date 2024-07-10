import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Companies from "./components/Companies.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#60BBEE] via-[#0775B4] to-[#0A72AD] min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
      </div>
      <Companies />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
