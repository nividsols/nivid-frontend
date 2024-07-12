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
import CaseStudies from "./components/CaseStudies.jsx";
import CaseStudyDetails from "./pages/CaseStudyDetails.jsx";

const Layout = ({ children }) => (
  <div className=" min-h-screen">
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
              <CaseStudies/>
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
        <Route
          path="/case-study-detail/:id"
          element={
            <Layout>
              <CaseStudyDetails/>
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <ContactUs/>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
