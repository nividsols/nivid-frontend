import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Companies from "./components/Companies.jsx";
import Services from "./components/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";

const Layout = ({ children }) => (
  <div className=" w-screen min-h-screen">
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
              <ContactUs />
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
