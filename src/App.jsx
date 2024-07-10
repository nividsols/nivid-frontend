import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Companies from "./components/Companies.jsx";
import Services from "./components/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./components/AboutUs.jsx";

const Layout = ({ children }) => (
  <div className="bg-gradient-to-r from-[#60BBEE] via-[#0775B4] to-[#0A72AD] w-screen min-h-screen">
    <Navbar />
    <div className="pt-16">{children}</div>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <Companies />
              <Services />
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/service-detail/:title"
          element={
            <Layout>
              <ServiceDetail />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
